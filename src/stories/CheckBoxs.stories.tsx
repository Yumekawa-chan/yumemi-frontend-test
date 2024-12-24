import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CheckBoxs from '@/components/CheckBoxs';

const meta: Meta<typeof CheckBoxs> = {
  title: 'Example/CheckBoxs',
  component: CheckBoxs,
};
export default meta;

type Story = StoryObj<typeof CheckBoxs>;

function CheckBoxsWithState() {
  const [selectedPrefectures, setSelectedPrefectures] = useState<string[]>([]);
  return (
    <CheckBoxs
      selectedPrefectures={selectedPrefectures}
      setSelectedPrefectures={setSelectedPrefectures}
    />
  );
}

export const Default: Story = {
  render: () => <CheckBoxsWithState />,
};
