import Input from '.';
import { INPUT_SCALE_NAMES } from '../../constant';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    scale: {
      description: '컴포넌트 사이즈',
      options: INPUT_SCALE_NAMES,
    },
    value: {
      type: 'string',
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Example = Template.bind({});