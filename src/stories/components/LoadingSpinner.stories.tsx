import type { Meta, StoryObj } from '@storybook/react';
import LoadingSpinner from '@/components/items/LoadingSpinner';

const meta: Meta<typeof LoadingSpinner> = {
  title: 'Example/LoadingSpinner',
  component: LoadingSpinner,
};
export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {};
