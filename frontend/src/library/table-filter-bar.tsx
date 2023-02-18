import React, { useState } from 'react'
import { Button, Card, Select, Input, Space } from 'antd'
import { PlusCircleOutlined, ArrowRightOutlined } from '@ant-design/icons'
import styled from 'styled-components'

// import { type Store } from 'store/index'

const Wrapper = styled.div`

`

const PillWrapper = styled.span`
  position: relative;
  z-index: 20;
`

interface FilterPillProps {
  name: string
  applyFilter: any
}

const FilterPill: React.FunctionComponent<FilterPillProps> = ({ name, applyFilter }) => {
  const [method, setMethod] = useState<string>('exact')
  const [value, setValue] = useState(0)
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const onApply = (): void => {
    applyFilter(method, value)
  }

  const methodOptions = [
    {
      label: 'exact',
      value: 'Is Equal To'
    },
    {
      label: '__lte',
      value: 'Is Less Than'
    },
    {
      label: '__gte',
      value: 'Is Greater Than'
    },
    {
      label: '__range',
      value: 'Is Between'
    }

  ]

  const getMethodDisplayValue = (key: string): string => {
    const option = methodOptions.find((option) => option.value === key)

    if (option !== undefined) return option.label

    return ''
  }

  return (
    <PillWrapper>
      {isPanelOpen && <Card
          size="small"
          style={{ top: 24, position: 'absolute', width: 200 }}
          title="Filter X"
        >
          <Space direction='vertical'>
            <Select
              defaultValue="exact"
              value={method}
              style={{ width: '100%' }}
              onChange={setMethod}
              options={methodOptions}
            />
            <Space>
              <ArrowRightOutlined />
              <Input placeholder='Value' value={value} onChange={(e) => { setValue(e.target.valueAsNumber) }} type="number"/>
            </Space>
            <Button type="primary" block onClick={() => { onApply() }}>Apply</Button>
          </Space>
        </Card>
      }

        <Button
          type="dashed"
          size="small"
          icon={<PlusCircleOutlined />}
          onClick={() => { setIsPanelOpen(true) }}
        >
          { isNaN(value) ? name : `${getMethodDisplayValue(method)} ${value}` }
        </Button>
    </PillWrapper>
  )
}

const TableFilterBar: React.FunctionComponent = () => {
  // const dataDimensions = useSelector((state: Store) => state.constants.value.dataDimensions)

  const applyAmountFilter = (method: string, value: number): void => {
    console.log(method, value)
  }

  return <Wrapper>
    <FilterPill name="Amount" applyFilter={applyAmountFilter} />
  </Wrapper>
}

export default TableFilterBar
