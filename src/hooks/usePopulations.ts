import { useState, useEffect } from 'react';
import { fetchPopulationData } from '@/hooks/api';
import { Prefecture } from '@/types/prefecture';
import { Population } from '@/types/population';

interface PrefectureColor {
  name: string;
  color: string;
}

interface PopulationGraphData {
  year: number;
  [prefName: string]: number;
}

/**
 * 都道府県ごとの人口データを取得する
 * @param selectedPrefectures 選択された都道府県名の配列
 * @param prefectures 都道府県データの配列
 * @param selectedPattern 表示する人口データの種類
 * @returns 人口データと色情報
 */

export function usePopulations(
  selectedPrefectures: string[],
  prefectures: Prefecture[],
  selectedPattern: string
): {
  data: PopulationGraphData[];
  colorMap: Record<string, string>;
  error: string | null;
} {
  const [data, setData] = useState<PopulationGraphData[]>([]);
  const [colorMap, setColorMap] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchDataInBatches = async (codes: number[]) => {
      const results = [];
      for (const code of codes) {
        const result = await fetchPopulationData(code).catch((err) => {
          console.error(`コード${code}のデータ取得に失敗しました:`, err);
          return null;
        });
        results.push(result);
      }
      return results;
    };

    const loadData = async () => {
      if (selectedPrefectures.length === 0) {
        setData([]);
        return;
      }

      try {
        const selectedPrefectureObjects = selectedPrefectures
          .map((name) => prefectures.find((p) => p.prefName === name))
          .filter((p): p is Prefecture => p !== undefined);

        const selectedCodes = selectedPrefectureObjects.map((p) => p.prefCode);
        const responses = await fetchDataInBatches(selectedCodes);
        if (signal.aborted) return;

        const merged: { [year: number]: PopulationGraphData } = {};
        selectedPrefectureObjects.forEach((pref, index) => {
          const datasets = responses[index];
          if (!datasets) return;
          const targetDataset = datasets.find(
            (ds: { label: string; data: Population[] }) =>
              ds.label === selectedPattern
          );
          if (!targetDataset) return;
          targetDataset.data.forEach((p: Population) => {
            if (!merged[p.year]) {
              merged[p.year] = { year: p.year };
            }
            merged[p.year][pref.prefName] = p.value;
          });
        });
        setData(Object.values(merged).sort((a, b) => a.year - b.year));

        const colorResponse = await fetch('./prefectureColors.json', {
          signal,
        });
        const colors: PrefectureColor[] = await colorResponse.json();
        setColorMap(
          colors.reduce(
            (acc, { name, color }) => ({
              ...acc,
              [name]: color,
            }),
            {}
          )
        );
      } catch (err) {
        if (signal.aborted) return;
        console.error('データの読み込み中にエラーが発生しました:', err);
        setError((err as Error).message);
      }
    };

    loadData();

    return () => {
      controller.abort();
    };
  }, [selectedPrefectures, prefectures, selectedPattern]);

  return { data, colorMap, error };
}
