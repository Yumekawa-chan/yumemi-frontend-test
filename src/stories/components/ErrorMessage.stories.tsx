import type { Meta, StoryObj } from '@storybook/react';
import ErrorMessage from '@/components/items/ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Example/ErrorMessage',
  component: ErrorMessage,
};
export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    message: 'sample error message',
  },
};
