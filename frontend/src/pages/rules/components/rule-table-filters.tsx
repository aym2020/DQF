import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import QuantityTableFilter from '../../../library/tables/quantity-table-filter'

const Wrapper = styled.div`

`

interface Props {
  onFilterChanged: any
}

const TableFilterBar: React.FunctionComponent<Props> = ({ onFilterChanged }) => {
  const [amountFilter, setAmountFilter] = useState('')

  const applyAmountFilter = (filter: string): void => {
    setAmountFilter(filter)
    createFilterString()
  }

  useEffect(() => {
    createFilterString()
  }, [amountFilter])

  const createFilterString = (): void => {
    let filter = ''

    if (amountFilter !== '') {
      filter += amountFilter
    }

    onFilterChanged(filter)
  }

  return <Wrapper>
    <QuantityTableFilter
    name="Amount"
    applyFilter={applyAmountFilter}
    />
  </Wrapper>
}

export default TableFilterBar
