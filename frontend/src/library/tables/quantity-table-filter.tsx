import React, { useState } from 'react'
import { Button, Card, Select, Input, Space } from 'antd'
import { PlusCircleOutlined, ArrowRightOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const PillWrapper = styled.span`
  position: relative;
  z-index: 20;
`

interface Props {
  name: string
  applyFilter: any
}

const QuantityTableFilter: React.FunctionComponent<Props> = ({ name, applyFilter }) => {
  const [method, setMethod] = useState<string>('exact')
  const [value, setValue] = useState(0)
  const [appliedMethod, setAppliedMethod] = useState<string>('')
  const [appliedValue, setAppliedValue] = useState(0)
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const onApply = (): void => {
    setAppliedMethod(method)
    setAppliedValue(value)

    const filter = `amount__${method}=${value}`

    applyFilter(filter)
    setIsPanelOpen(false)
  }

  const methodOptions = [
    {
      value: 'exact',
      label: 'Is Equal'
    },
    {
      value: '__lte',
      label: 'Is Less Than'
    },
    {
      value: '__gte',
      label: 'Is Greater Than'
    },
    {
      value: '__range',
      label: 'Is Between'
    }
  ]

  const getMethodDisplayValue = (key: string): string => {
    const option = methodOptions.find((option) => option.value === key)

    if (option !== undefined) return option.label

    return ''
  }

  const getPillDisplayValue = (): string => {
    if (appliedMethod !== '' && !isNaN(appliedValue)) {
      return `${getMethodDisplayValue(appliedMethod)} ${appliedValue}`
    }

    return name
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
        </Card>}
        <Button
          type="dashed"
          size="small"
          icon={<PlusCircleOutlined />}
          onClick={() => { setIsPanelOpen(true) }}
        >
          { getPillDisplayValue() }
        </Button>
    </PillWrapper>
  )
}

export default QuantityTableFilter
