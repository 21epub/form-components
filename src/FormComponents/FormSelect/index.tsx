import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd/lib/select';
import { uniqueId } from 'lodash';
import { Wrapper } from './Styled';
import type { OptionsConfigType, OptionType } from '../../type';

export interface FormSelectProps<T> extends SelectProps<T> {
  optionsConfig: OptionsConfigType<'Radio'>;
  styled?: string;
  onChange?: (value: T) => void;
}

const FormSelect: React.FC<FormSelectProps<string>> = (props) => {
  const { value, optionsConfig, styled, onChange, ...rest } = props;
  const defaultValue = optionsConfig?.defaultValue;
  const [propsValue, setPropsValue] = useState<string>(value || defaultValue);

  const onSelectChange = (changeValue: string) => {
    setPropsValue(changeValue);
    onChange && onChange(String(changeValue));
  };

  useEffect(() => {
    // 设置初始选中的值
    onChange && onChange(propsValue);
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper styled={styled}>
      <Select
        value={String(propsValue) || undefined}
        onChange={onSelectChange}
        {...rest}
      >
        {optionsConfig?.options?.map((option: OptionType) => {
          return (
            <Select.Option key={uniqueId()} value={option.value as string}>
              {option.label}
            </Select.Option>
          );
        })}
      </Select>
    </Wrapper>
  );
};

export default FormSelect;
