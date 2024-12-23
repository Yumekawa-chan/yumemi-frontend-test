import { fetchPrefectures, fetchPopulationData } from '@/hooks/api';

beforeAll(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('fetchPrefectures', () => {
  it('都道府県データを正しく取得できること', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        result: [
          { prefCode: 1, prefName: '北海道' },
          { prefCode: 2, prefName: '青森県' },
        ],
      }),
    });

    const data = await fetchPrefectures();
    expect(data).toEqual([
      { prefCode: 1, prefName: '北海道' },
      { prefCode: 2, prefName: '青森県' },
    ]);
  });

  it('レスポンスが失敗した場合にエラーを投げること', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      statusText: 'Forbidden',
    });

    await expect(fetchPrefectures()).rejects.toThrow(
      '都道府県データ取得に失敗しました。: Forbidden'
    );
  });
});

describe('fetchPopulationData', () => {
  it('人口データを正しく取得できること', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        result: {
          data: [
            {
              label: '総人口',
              data: [
                { year: 1980, value: 100000 },
                { year: 2020, value: 90000 },
                { year: 2025, value: 80000 },
              ],
            },
            {
              label: '年少人口',
              data: [
                { year: 1980, value: 20000 },
                { year: 2020, value: 18000 },
                { year: 2025, value: 17000 },
              ],
            },
          ],
        },
      }),
    });

    const data = await fetchPopulationData(1);
    expect(data).toEqual([
      {
        label: '総人口',
        data: [
          { year: 1980, value: 100000 },
          { year: 2020, value: 90000 },
        ],
      },
      {
        label: '年少人口',
        data: [
          { year: 1980, value: 20000 },
          { year: 2020, value: 18000 },
        ],
      },
    ]);
  });

  it('fetch 失敗時にエラーを投げること', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error('Network error')
    );
    await expect(fetchPopulationData(1)).rejects.toThrow(
      '人口データ取得時にエラーが発生しました。： Network error'
    );
  });
});
