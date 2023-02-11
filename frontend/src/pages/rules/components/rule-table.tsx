import React from 'react'
import { Table, Button, Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { TableHeader } from 'library/tables'

import { type Rule } from 'types'
const { Title } = Typography

const columns: ColumnsType<Rule> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>
  },

  {
    title: 'Description',
    dataIndex: 'description',
    key: 'descritpion',
    render: (text) => <span>{text}</span>
  },

  {
    title: 'Source',
    dataIndex: 'source',
    key: 'source',
    render: (text) => <span>{text}</span>
  },

  {
    title: 'Data Dimension',
    dataIndex: 'data_dimension',
    key: 'data_dimension',
    render: (text) => <span>{text}</span>
  },

  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => <span>{text}</span>
  },

  {
    title: 'Data Owner',
    dataIndex: 'data_owner',
    key: 'data_owner',
    render: (text, record) => <a>{record.data_owner?.name}</a>
  },

  {
    title: 'Creation Date',
    dataIndex: 'creation_date',
    key: 'creation_date',
    render: (text) => new Date(text).toLocaleDateString()
  },

  {
    title: 'Update Date',
    dataIndex: 'update_date',
    key: 'update_date',
    render: (text) => new Date(text).toLocaleDateString()
  },

  {
    title: 'Suspension Date',
    dataIndex: 'suspension_date',
    key: 'suspension_date',
    render: (text) => {
      if (typeof text === 'string') {
        return new Date(text).toLocaleDateString()
      }
      return ''
    }
  }
]

interface RulesTableProps {
  rules: Rule[]
  setIsFormVisible: (value: boolean) => void
}

const RulesTable: React.FC<RulesTableProps> = ({ rules, setIsFormVisible }) => {
  return (
    <div>
      <TableHeader>
        <Title level={2}>Rules</Title>
        <Button
          type="primary"
          onClick={() => { setIsFormVisible(true) }}>
          Add Rule
        </Button>
    </TableHeader>
    <Table columns={columns} dataSource={rules} />
    </div>
  )
}
export default RulesTable
