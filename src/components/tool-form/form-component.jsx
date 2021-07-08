import React from 'react'
import { Select, Input, DatePicker, TimePicker, Radio, Checkbox, Cascader } from 'antd'

const { Option } = Select
const RadioGroup = Radio.Group
const { RangePicker, WeekPicker, MonthPicker } = DatePicker
const { TextArea } = Input

export default WrapForm => {
  return class HockFormComponent extends WrapForm {
    constructor (props) {
      super(props)
      const { defaultStyle } = this.props
      this.typeData = {
        SelectUser (item) {
          const { optionValue = [] } = item
          return (
            <Select style={{ ...defaultStyle }} {...item.cptParams}>
              {
                optionValue.length === 2
                  ? item.options.map((opt, opi) => (
                    <Option value={opt[optionValue[0]]} key={`select${opi}`}>
                      {opt[optionValue[1]]}
                    </Option>
                  ))
                  : item.options.map((opt, opi) => (
                    <Option value={opt.id} key={`select${opi}`}>
                      {opt.name}
                    </Option>
                  ))
              }
            </Select>
          )
        },
        CascaderUser (item) {
          return (
            <Cascader {...item.cptParams} options={item.options} />
          )
        },
        InputUser (item) {
          return <Input style={{ ...defaultStyle }} {...item.cptParams} />
        },
        TextAreaUser (item) {
          return <TextArea style={{ ...defaultStyle }} {...item.cptParams} />
        },
        DatePickerUser (item) {
          return (
            <DatePicker
              style={{ ...defaultStyle }}
              {...item.cptParams}
            />
          )
        },

        RangePickerUser (item) {
          return (
            <RangePicker
              style={{ ...defaultStyle }}
              {...item.cptParams}
            />
          )
        },

        WeekPickerUser (item) {
          return (
            <WeekPicker
              style={{ ...defaultStyle }}
              {...item.cptParams}
            />
          )
        },

        MonthPickerUser (item) {
          return (
            <MonthPicker
              style={{ ...defaultStyle }}
              {...item.cptParams}
            />
          )
        },

        TimePickerUser (item) {
          return <TimePicker style={{ ...defaultStyle }} {...item.cptParams} />
        },

        RadioUser (item) {
          return (
            <RadioGroup style={{ ...defaultStyle }} {...item.cptParams}>
              {item.options.map((opt, opi) => (
                <Radio value={opt.value} key={opi}>
                  {opt.label}
                </Radio>
              ))}
            </RadioGroup>
          )
        },

        CheckboxUser (item) {
          return (
            <Checkbox.Group {...item.cptParams}>
              {item.options.map((opt, opi) => (
                <Checkbox value={opt.value} key={opi}>
                  {opt.label}
                </Checkbox>
              ))}
            </Checkbox.Group>
          )
        },
        TitleUser (item) {
          return item.renderDom
        }
      }
    }

    render () {
      return super.render()
    }
  }
}
