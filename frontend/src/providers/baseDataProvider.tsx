import React, { useEffect } from 'react'
import { type ProviderProps } from 'types'
import { useDispatch } from 'react-redux'

import { fetchConstants } from 'store/constantSlice'
import { type AppDispatch } from 'store'

const BaseDataProvider: React.FC<ProviderProps> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    console.log('fetching constants')
    void dispatch(fetchConstants())
  }, [])
  return (<div>{ children }</div>)
}

export default BaseDataProvider
