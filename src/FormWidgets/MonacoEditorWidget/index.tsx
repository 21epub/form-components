import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import type { MonacoEditorProps } from 'react-monaco-editor';
import { Wrapper } from './Styled';

export interface MonacoEditorWidgetProps extends MonacoEditorProps {}

const MonacoEditorWidget: React.FC<MonacoEditorWidgetProps> = (props) => {
  const {
    value = '',
    width = '100%',
    height = '100%',
    language = 'json',
    theme = 'vs-dark',
    options = { selectOnLineNumbers: true },
    ...rest
  } = props;

  return (
    <Wrapper className='MonacoEditorWidget'>
      <MonacoEditor
        width={width}
        height={height}
        language={language}
        theme={theme}
        defaultValue={value || ''}
        options={options}
        {...rest}
      />
    </Wrapper>
  );
};

export default MonacoEditorWidget;
