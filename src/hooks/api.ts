import { Prefecture } from '@/types/prefecture';

/**
 * 都道府県データを取得する
 * @returns 都道府県データの配列
 */
export async function fetchPrefectures(): Promise<Prefecture[]> {
  const PREFECTURES_API_URL = process.env.NEXT_PUBLIC_PREFECTURES_API_URL;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  if (!PREFECTURES_API_URL) {
    throw new Error('PREFECTURES_API_URLが設定されていません。');
  }
  if (!API_KEY) {
    throw new Error('API_KEYが設定されていません。');
  }

  try {
    const response = await fetch(PREFECTURES_API_URL, {
      headers: {
        'X-API-KEY': API_KEY,
      },
    });
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
