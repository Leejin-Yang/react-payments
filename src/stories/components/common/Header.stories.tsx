import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../../../components/common/Header';

const meta: Meta<typeof Header> = {
  title: 'components/common/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

const HeaderTemplate: Story = {
  render: (args) => {
    return (
      <BrowserRouter>
        <Header {...args} />
      </BrowserRouter>
    );
  },
};

const DEFAULT_ARGS = {
  title: '헤더 타이틀',
};

export const Default: Story = {
  ...HeaderTemplate,
  args: { ...DEFAULT_ARGS },
};

export const WithPreviousButton: Story = {
  ...HeaderTemplate,
  args: {
    ...DEFAULT_ARGS,
    previousButton: true,
  },
};
