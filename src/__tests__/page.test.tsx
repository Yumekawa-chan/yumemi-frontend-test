import { render, screen } from '@testing-library/react';
import Page from '@/app/page';
import { usePrefectures } from '@/hooks/usePrefectures';
import { usePopulations } from '@/hooks/usePopulations';

jest.mock('@/hooks/usePrefectures', () => ({
  usePrefectures: jest.fn(),
}));
jest.mock('@/hooks/usePopulations', () => ({
  usePopulations: jest.fn(),
}));

describe('Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('ローディング中は LoadingSpinner を表示', () => {
    (usePrefectures as jest.Mock).mockReturnValue({
      prefectures: [],
      error: null,
      loading: true,
    });
    (usePopulations as jest.Mock).mockReturnValue({
      data: [],
      colorMap: {},
      error: null,
    });

    render(<Page />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('エラー時は ErrorMessage を表示', () => {
    (usePrefectures as jest.Mock).mockReturnValue({
      prefectures: [],
      error: '都道府県取得エラー',
      loading: false,
    });
    (usePopulations as jest.Mock).mockReturnValue({
      data: [],
      colorMap: {},
      error: null,
    });

    render(<Page />);

    expect(
      screen.getByText('エラーが発生しました: 都道府県取得エラー')
    ).toBeInTheDocument();
  });

  it('正常時は "都道府県" と "人口推移グラフ" が表示される', () => {
    (usePrefectures as jest.Mock).mockReturnValue({
      prefectures: [{ prefCode: 1, prefName: '北海道' }],
      error: null,
      loading: false,
    });
    (usePopulations as jest.Mock).mockReturnValue({
      data: [],
      colorMap: {},
      error: null,
    });

    render(<Page />);

    expect(screen.getByText('都道府県')).toBeInTheDocument();
    expect(screen.getByText('人口推移グラフ')).toBeInTheDocument();
  });
});
