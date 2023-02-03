import React from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

const columns: ColumnsType<Rules> = [
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
    render: (text) => <a>{text}</a>
  },

  {
    title: 'Source',
    dataIndex: 'source',
    key: 'source',
    render: (text) => <a>{text}</a>
  },

  {
    title: 'Data Dimension',
    dataIndex: 'data_dimension',
    key: 'data_dimension',
    render: (text) => <a>{text}</a>
  },

  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => <a>{text}</a>
  },

  {
    title: 'Data Owner',
    dataIndex: 'data_owner',
    key: 'data_owner',
    render: (text, record) => <a>{record.data_owner.name}</a>
  },

  {
    title: 'Creation Date',
    dataIndex: 'creation_date',
    key: 'creation_date',
    render: (text) => <a>{new Date(text).toLocaleDateString()}</a>
  },

  {
    title: 'Update Date',
    dataIndex: 'update_date',
    key: 'update_date',
    render: (text) => <a>{new Date(text).toLocaleDateString()}</a>
  },

  {
    title: 'Suspension Date',
    dataIndex: 'suspension_date',
    key: 'suspension_date',
    render: (text) => <a>{new Date(text).toLocaleDateString()}</a>
  }

]

interface Rules {
  name: string
  data_owner: {
    name: string
  }
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
