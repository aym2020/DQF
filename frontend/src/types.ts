export interface Rule {
  name: string
  data_owner: {
    id_data_owner: number
    name: string
  }
  data_domain: {
    id_data_domain: number
    name: string
  }
}

export interface DataOwner {
  id_data_owner: number
  name: string
}

export interface DataDomain {
  id_data_domain: number
  name: string
}

export interface ProviderProps {
  children: JSX.Element | JSX.Element[]
}
