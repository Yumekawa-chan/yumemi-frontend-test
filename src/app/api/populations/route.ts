import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const API_KEY = process.env.API_KEY;
  const POPULATION_API_URL = process.env.POPULATION_API_URL;

  if (!API_KEY || !POPULATION_API_URL) {
    return NextResponse.json(
      {
        error:
          'サーバー環境変数(API_KEY, POPULATION_API_URL)が設定されていません。',
      },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const prefCode = searchParams.get('prefCode');
  if (!prefCode) {
    return NextResponse.json(
      { error: 'prefCode クエリパラメータが指定されていません。' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(`${POPULATION_API_URL}?prefCode=${prefCode}`, {
      headers: {
        'X-API-KEY': API_KEY,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: '人口データの取得に失敗しました。' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('人口データ取得エラー:', error);
    return NextResponse.json(
      {
        error: `人口データ取得時にエラーが発生しました: ${
          (error as Error).message
        }`,
      },
      { status: 500 }
    );
  }
}
