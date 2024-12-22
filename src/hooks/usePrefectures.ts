'use client';
import { useEffect, useState } from 'react';
import { fetchPrefectures } from '@/hooks/api';
import type { Prefecture } from '@/types/prefecture';

/**
 * 都道府県データを取得する
 * @returns 都道府県データとエラー情報
 */
export function usePrefectures(): {
  prefectures: Prefecture[];
  error: string | null;
} {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPrefectures = async () => {
      try {
        const data = await fetchPrefectures();
        setPrefectures(data);
      } catch (error) {
        setError((error as Error).message);
      }
    };
    loadPrefectures();
  }, []);

  return { prefectures, error };
}