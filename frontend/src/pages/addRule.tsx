import React from 'react'

import { Button, Checkbox, Form, Input } from 'antd'
import RulesAPI from 'plugins/rulesAPI'

interface Rule {
  name: string
}

const AddRule: React.FC = () => {
  const SubmitRule = (values: Rule): void => {
    RulesAPI.post(
      'rules/', values
    ).then(() => {
      console.log('success')
    }).catch(() => {
      console.log('failed')
    })
  }

  const onFinish = (values: Rule): void => {
    SubmitRule(values)
  }

  const onFinishFailed = (errorInfo: any): void => {
    console.log('Failed:', errorInfo)
  }

  return (
   <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
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
