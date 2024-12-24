import type { Meta, StoryObj } from '@storybook/react';
import GraphDisplay from '@/components/GraphDisplay';

const meta: Meta<typeof GraphDisplay> = {
  title: 'Example/GraphDisplay',
  component: GraphDisplay,
};
export default meta;

type Story = StoryObj<typeof GraphDisplay>;

export const Default: Story = {
  render: () => {
    const data = [
      { year: 1980, 北海道: 100000, 青森県: 200000 },
      { year: 1990, 北海道: 110000, 青森県: 210000 },
      { year: 2000, 北海道: 120000, 青森県: 220000 },
      { year: 2010, 北海道: 130000, 青森県: 230000 },
      { year: 2020, 北海道: 90000, 青森県: 190000 },
    ];
    const colorMap = {
      北海道: '#FF0000',
      青森県: '#00FF00',
    };
    return <GraphDisplay data={data} colorMap={colorMap} />;
  },
};
