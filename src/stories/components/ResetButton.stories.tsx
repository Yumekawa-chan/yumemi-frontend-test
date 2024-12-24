import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ResetButton from '@/components/items/ResetButton';

const meta: Meta<typeof ResetButton> = {
  title: 'Example/ResetButton',
  component: ResetButton,
};
export default meta;

type Story = StoryObj<typeof ResetButton>;

const DefaultComponent = () => {
  const [selectedPrefectures, setSelectedPrefectures] = useState([
    '北海道',
    '青森県',
  ]);
  return (
    <div>
      <p>選択されている都道府県: {selectedPrefectures.join(',')}</p>
      <ResetButton setSelectedPrefectures={setSelectedPrefectures} />
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultComponent />,
};
