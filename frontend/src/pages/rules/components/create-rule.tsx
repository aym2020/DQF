import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Select } from 'antd'
import RulesAPI from 'plugins/rulesAPI'
import { useSelector } from 'react-redux'

import { type Rule, type DataOwner, type DataDomain } from 'types'
import { type Store } from 'store/index'

const { Option } = Select

interface RulesTableProps {
  insertNewData: (value: Rule) => void
}

const AddRule: React.FC<RulesTableProps> = ({ insertNewData }) => {
  const dataDimensions = useSelector((state: Store) => state.constants.value.dataDimensions)

  // DataOwners
  const [dataowners, setDataOwners] = useState<DataOwner[]>([])

  useEffect(() => {
    const getDataOwners = async (): Promise<void> => {
      try {
        const response = await RulesAPI.get('dataowners')
        setDataOwners(response.data.results)
      } catch (error) {
        console.log('oh no request failed')
      }
    }
    void getDataOwners()
  }, [])

  // DataDomains
  const [datadomains, setDataDomains] = useState<DataDomain[]>([])
  useEffect(() => {
    const getDataDomains = async (): Promise<void> => {
      try {
        const response = await RulesAPI.get('datadomains')
        setDataDomains(response.data.results)
      } catch (error) {
        console.log('oh no request failed')
      }
    }
    void getDataDomains()
  }, [])

  // Submit Rule
  const SubmitRule = async (values: Rule): Promise<void> => {
    console.log('Values:', values)
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
      <Form.Item name="name"
        label="Rule Name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="data_dimension" label="Data Dimension" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          { Object.entries(dataDimensions).map(([key, value]) => (
            <Option value={key} key={key}>{value as React.ReactNode}</Option>
          ))}
          </Select>
      </Form.Item>

      <Form.Item name="data_owner_id" label="Data Owner" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          { dataowners.map((dataowner) => (
            <Option value={dataowner.id} key={dataowner.id}>{dataowner.name as React.ReactNode}</Option>
          ))}
          </Select>
      </Form.Item>

      <Form.Item name="data_domain_id" label="Data Domain" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          { datadomains.map((datadomain) => (
            <Option value={datadomain.id} key={datadomain.id}>{datadomain.name as React.ReactNode}</Option>
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
