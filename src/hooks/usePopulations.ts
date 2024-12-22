import { useState, useEffect } from 'react';
import { fetchPopulationData } from '@/hooks/api';
import { Prefecture } from '@/types/prefecture';

interface PopulationGraphData {
  year: number;
  [prefName: string]: number;
}

export function usePopulations(
  selectedPrefectures: string[],
  prefectures: Prefecture[],
  selectedPattern: string
): {
  data: PopulationGraphData[];
  error: string | null;
} {
  const [data, setData] = useState<PopulationGraphData[]>([]);
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
        await fetchDataInBatches(selectedCodes);
        if (signal.aborted) return;
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

  return { data, error };
}
