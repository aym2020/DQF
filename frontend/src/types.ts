import type React from 'react'

export interface Rule {
  name: string
  data_owner: {
    name: string
  }
}

export interface ProviderProps {
  children: React.ReactNode | React.ReactNode[]
}
