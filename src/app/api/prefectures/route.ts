import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  const API_KEY = process.env.API_KEY;
  const PREFECTURES_API_URL = process.env.PREFECTURES_API_URL;

  if (!API_KEY || !PREFECTURES_API_URL) {
    return NextResponse.json(
      {
        error:
          'サーバー環境変数(API_KEY, PREFECTURES_API_URL)が設定されていません。',
      },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(PREFECTURES_API_URL, {
      headers: {
        'X-API-KEY': API_KEY,
      },
    });
    if (!response.ok) {
      return NextResponse.json(
        {
          error: `都道府県データの取得に失敗しました: ${response.statusText}`,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('都道府県取得エラー:', error);
    return NextResponse.json(
      {
        error: `都道府県データ取得時にエラーが発生しました: ${
          (error as Error).message
        }`,
      },
      { status: 500 }
    );
  }
}
