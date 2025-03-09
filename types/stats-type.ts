export type StateStats = {
  uid: number
  uf: string
  state: string
  cases: number
  deaths: number
  suspects: number
  refuses: number
  broadcast: boolean
  comments: string
  datetime: string
}

export type CountryStats = {
  country: string
  cases: number
  confirmed: number
  deaths: number
  recovered: number
  updated_at: string
}

export interface ResponseData<T> {
  data: T[]
}
