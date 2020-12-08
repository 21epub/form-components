import React, { useEffect, useState } from 'react'
import { Radio, List } from 'antd'
import { RadioProps, RadioChangeEvent } from 'antd/lib/radio'
import styles from './FormRadio.module.less'
import { uniqueId } from 'lodash'

export interface Options {
  label: string
  value: string
  checked: boolean
  index: number
}

export interface OptionsConfig {
  type: string
  defaultValue: string
  options: Options[]
}

export interface RadioWidgetProps extends RadioProps {
  readOnly: false
  size: 'large' | 'middle' | 'small'
  optionsConfig: OptionsConfig
  onChange: (value: RadioChangeEvent) => void
}

const FormRadio: React.FC<RadioWidgetProps> = (props) => {
  const { value, optionsConfig, readOnly, size, onChange } = props
  const listSize = size === 'middle' ? 'default' : size
  const [defaultValue, setDefaultValue] = useState(
    optionsConfig?.defaultValue ?? undefined
  )
  const [propsValue, setPropsValue] = useState(value ?? defaultValue)

  const onRadioChange = (e: RadioChangeEvent) => {
    setPropsValue(e.target.value)
    if (typeof onChange === 'function') {
      onChange(e.target.value)
    }
  }

  useEffect(() => {
    // 设置初始选中的值
    setDefaultValue(optionsConfig?.defaultValue)
    setPropsValue(optionsConfig?.defaultValue)
  }, [optionsConfig])

  return (
    <List bordered itemLayout='vertical' size={listSize}>
      <Radio.Group
        className={styles.radioGroup}
        defaultValue={defaultValue}
        value={propsValue}
        disabled={readOnly}
        onChange={onRadioChange}
      >
        {optionsConfig?.options?.map((option: Options) => {
          return (
            <List.Item key={uniqueId()}>
              <Radio value={option.value}>{option.label}</Radio>
            </List.Item>
          )
        })}
      </Radio.Group>
    </List>
  )
}

export default FormRadio
