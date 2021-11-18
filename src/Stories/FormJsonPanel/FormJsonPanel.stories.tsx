import React from 'react';
import { Story, Meta } from '@storybook/react';
import { JsonPanel } from '../../FormJsonPanel';
import type { JsonPanelProps } from '../../FormJsonPanel';
import { jsonPanelSetting } from '../../FormJsonPanel/mock/settingConfig';
// import {
//   Title,
//   Subtitle,
//   Description,
//   Primary,
//   ArgsTable,
//   Stories,
//   PRIMARY_STORY
// } from '@storybook/addon-docs/blocks';

export default {
  title: 'JsonPanel',
  component: JsonPanel
  // parameters: {
  //   docs: {
  //     description: {
  //       component: '组件描述111'
  //     },
  //     page: () => (
  //       <>
  //         <Title />
  //         <Subtitle />
  //         <Description />
  //         <Primary />
  //       </>
  //     )
  //   },
  //   componentSubtitle: '副标题'
  // }
} as Meta;

const Template: Story<JsonPanelProps> = (args) => <JsonPanel {...args} />;

export const JsonPanelFC = Template.bind({});

const onChange = (value: any) => {
  console.log(value);
};

JsonPanelFC.args = {
  panelType: 'EditorPanel',
  panelProps: {
    panelData: {},
    panelConfig: jsonPanelSetting,
    onChange: onChange
  },
  monacoLanguage: 'json'
};
