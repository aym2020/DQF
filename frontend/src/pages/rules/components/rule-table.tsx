import React from 'react'
import { Table, Button, Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { TableHeader } from 'library/tables'
import { useSelector } from 'react-redux'

import { type Rule, type DataOwner, type DataDomain } from 'types'
import { type Store } from 'store/index'
import { TABLE_PAGE_SIZE } from 'utils'

const { Title } = Typography

interface RulesTableProps {
  rules: Rule[]
  setIsFormVisible: (value: boolean) => void
  getRulePage: (page: number) => void
  total: number
}

const RulesTable: React.FC<RulesTableProps> = ({ rules, setIsFormVisible, getRulePage, total }) => {
  const dataDimensions: any = useSelector((state: Store) => state.constants.value.dataDimensions)

  const columns: ColumnsType<Rule> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name) => <p>{name}</p>
    },

    {
      title: 'Description',
      dataIndex: 'description',
      key: 'descritpion',
      render: (description) => <p>{description}</p>
    },

    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
      render: (source) => <p>{source}</p>
    },

    {
      title: 'Data Dimension',
      dataIndex: 'data_dimension',
      key: 'data_dimension',
      render: (dataDimension) => <p>{dataDimensions[dataDimension]}</p>
    },

    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => <p>{status}</p>
    },

    {
      title: 'Data Owner',
      dataIndex: 'data_owner',
      key: 'data_owner',
      render: (dataOwner: DataOwner) => <p>{dataOwner.name}</p>
    },

    {
      title: 'Data Domain',
      dataIndex: 'data_domain',
      key: 'data_domain',
      render: (dataDomain: DataDomain) => <p>{dataDomain.name}</p>
    },

    {
      title: 'Creation Date',
      dataIndex: 'creation_date',
      key: 'creation_date',
      render: (creationDate) => new Date(creationDate).toLocaleDateString()
    },

    {
      title: 'Update Date',
      dataIndex: 'update_date',
      key: 'update_date',
      render: (updateDate) => new Date(updateDate).toLocaleDateString()
    },

    {
      title: 'Suspension Date',
      dataIndex: 'suspension_date',
      key: 'suspension_date',
      render: (suspensionDate) => {
        if (typeof suspensionDate === 'string') {
          return new Date(suspensionDate).toLocaleDateString()
        }
        return ''
      }
    }
  ]

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
    <Table
    columns={columns}
    dataSource={rules}
    rowKey={rule => rule.id}
    pagination={{
      pageSize: TABLE_PAGE_SIZE,
      total,
      onChange: getRulePage
    }}
     />
    </div>
  )
}
export default RulesTable
