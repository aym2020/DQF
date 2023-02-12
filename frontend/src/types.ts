export interface Rule {
  id: number
  name: string
  data_owner: DataOwner
  data_domain: DataDomain
}

export interface DataOwner {
  id: number
  name: string
}

export interface DataDomain {
  id: number
  name: string
}

export interface ProviderProps {
  children: JSX.Element | JSX.Element[]
}
