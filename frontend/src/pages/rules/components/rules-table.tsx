import React from 'react'
import { Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

const columns: ColumnsType<Rules> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>
  },

  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    )
  }
]

interface Rules {
  name: string
}

interface RulesTableProps {
  rules: Rules[]
}

const RulesTable: React.FC<RulesTableProps> = ({ rules }) => {
  return (
        <Table columns={columns} dataSource={rules} />
  )
}
export default RulesTable
