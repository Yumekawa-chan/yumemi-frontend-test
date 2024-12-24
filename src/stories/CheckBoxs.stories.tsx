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

  const dummyPrefectures = [
    { prefCode: 1, prefName: '北海道' },
    { prefCode: 2, prefName: '青森県' },
    { prefCode: 3, prefName: '岩手県' },
    { prefCode: 4, prefName: '宮城県' },
    { prefCode: 5, prefName: '秋田県' },
  ];

  return (
    <CheckBoxs
      selectedPrefectures={selectedPrefectures}
      setSelectedPrefectures={setSelectedPrefectures}
      prefectures={dummyPrefectures}
    />
  );
}

export const Default: Story = {
  render: () => <CheckBoxsWithState />,
};
