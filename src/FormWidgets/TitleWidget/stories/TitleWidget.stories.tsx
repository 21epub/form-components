import React from 'react';
import type { Story, Meta } from '@storybook/react';
import TitleWidget from '..';
import type { TitleWidgetProps } from '..';

export default {
  title: '工具组件/标题展示（TitleWidget）',
  component: TitleWidget,
} as Meta;

const Template: Story<TitleWidgetProps> = (args) => <TitleWidget {...args} />;

export const 标题展示 = Template.bind({});

标题展示.args = {
  title: '这是标题',
  level: 1,
};
