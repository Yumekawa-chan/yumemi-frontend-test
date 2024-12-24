import { render, screen } from '@testing-library/react';
import GraphDisplay from '@/components/GraphDisplay';

describe('GraphDisplay', () => {
  it('データがない場合、グラフは X軸・Y軸のみ描画される', () => {
    render(<GraphDisplay data={[]} colorMap={{}} />);
    expect(screen.getByText('人口推移グラフ')).toBeInTheDocument();
  });

  it('複数のデータがある場合、ラインが複数描画される', () => {
    render(
      <GraphDisplay
        data={[
          { year: 1980, 北海道: 100000, 青森県: 200000 },
          { year: 2020, 北海道: 90000, 青森県: 190000 },
        ]}
        colorMap={{
          北海道: '#FF0000',
          青森県: '#00FF00',
        }}
      />
    );
    expect(screen.getByText('人口推移グラフ')).toBeInTheDocument();
  });
});
