import { render, screen, fireEvent } from '@testing-library/react';
import CheckBoxs from '@/components/CheckBoxs';
import { usePrefectures } from '@/hooks/usePrefectures';

jest.mock('@/hooks/usePrefectures', () => ({
  usePrefectures: jest.fn(),
}));

describe('CheckBoxs', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('都道府県を表示し、チェックの ON/OFF が正しく動作する', () => {
    (usePrefectures as jest.Mock).mockReturnValue({
      prefectures: [
        { prefCode: 1, prefName: '北海道' },
        { prefCode: 2, prefName: '青森県' },
      ],
    });

    const prefectures = [
      { prefCode: 1, prefName: '北海道' },
      { prefCode: 2, prefName: '青森県' },
    ];

    const mockSetSelectedPrefectures = jest.fn();
    render(
      <CheckBoxs
        selectedPrefectures={[]}
        setSelectedPrefectures={mockSetSelectedPrefectures}
        prefectures={prefectures}
      />
    );

    expect(screen.getByText('北海道')).toBeInTheDocument();
    expect(screen.getByText('青森県')).toBeInTheDocument();

    const checkbox = screen.getByLabelText('北海道') as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(mockSetSelectedPrefectures).toHaveBeenCalledTimes(1);
  });
});
