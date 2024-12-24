import { Prefecture } from '@/types/prefecture';
import { Population } from '@/types/population';
/**
 * 都道府県データを取得する
 * @returns 都道府県データの配列
 */
export async function fetchPrefectures(): Promise<Prefecture[]> {
  try {
    const response = await fetch('/api/prefectures');
    if (!response.ok) {
      throw new Error(
        `都道府県データ取得に失敗しました。: ${response.statusText}`
      );
    }
    const data = await response.json();
    return data.result || [];
  } catch (error) {
    throw new Error(
      `都道府県データ取得時にエラーが発生しました。： ${(error as Error).message}`
    );
  }
}

/**
 * 都道府県ごとの人口データを取得する
 * @param prefCode 都道府県コード
 * @returns 指定された都道府県の人口データ(総人口・年少人口・生産年齢人口・老年人口)を返す
 */
export async function fetchPopulationData(prefCode: number): Promise<
  {
    label: string;
    data: Population[];
  }[]
> {
  try {
    const response = await fetch(`/api/populations?prefCode=${prefCode}`);
    if (!response.ok) {
      throw new Error('人口データ取得に失敗しました。');
    }
    const data = await response.json();
    const datasets = data.result.data;
    datasets.forEach((dataset: { label: string; data: Population[] }) => {
      dataset.data = dataset.data.filter(
        (item) => item.year >= 1980 && item.year <= 2020
      );
    });
    return datasets;
  } catch (error) {
    throw new Error(
      `人口データ取得時にエラーが発生しました。： ${(error as Error).message}`
    );
  }
}
