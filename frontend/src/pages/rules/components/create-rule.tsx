import React from 'react'
import { Button, Form, Input, Select } from 'antd'
import RulesAPI from 'plugins/rulesAPI'
import { useSelector } from 'react-redux'

import { type Rule } from 'types'
import { type Store } from 'store/index'

const { Option } = Select

interface RulesTableProps {
  insertNewData: (value: Rule) => void
}

const AddRule: React.FC<RulesTableProps> = ({ insertNewData }) => {
  const dataDimensions = useSelector((state: Store) => state.constants.value.dataDimensions)
  const SubmitRule = async (values: Rule): Promise<void> => {
    try {
      const response = await RulesAPI.post('rules', values)
      insertNewData(response.data)
    } catch (error) {
      console.log('oh no request failed')
    }
  }

  const onFinish = (values: Rule): void => {
    void SubmitRule(values)
  }

  const onFinishFailed = (errorInfo: any): void => {
    console.log('Failed:', errorInfo)
  }

  return (
   <Form
      name="basic"
      layout='vertical'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="middle"
    >
      <Form.Item
        label="Rule Name"
        name="rulename"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="datadimension" label="Data Dimension" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          { Object.entries(dataDimensions).map(([key]) => (
            <Option key={key} value={key}>{key}</Option>
          ))}
          </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddRule
