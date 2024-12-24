import type { Meta, StoryObj } from '@storybook/react';
import { JSX, useState } from 'react';
import PopulationFilter from '@/components/items/PopulationFilter';

const meta: Meta<typeof PopulationFilter> = {
  title: 'Example/PopulationFilter',
  component: PopulationFilter,
};
export default meta;

type Story = StoryObj<typeof PopulationFilter>;

function PopulationFilterExample(): JSX.Element {
  const [selectedPattern, setSelectedPattern] = useState('総人口');
  return (
    <PopulationFilter
      selectedPattern={selectedPattern}
      setSelectedPattern={setSelectedPattern}
    />
  );
}

export const Default: Story = {
  render: PopulationFilterExample,
};
