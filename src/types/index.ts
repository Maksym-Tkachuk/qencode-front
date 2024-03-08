type DetailErrorT = {
  field_name: string
  error: string
}

export type ResponseErrorT = {
  error: number
  detail: DetailErrorT[] | string
  timestamp: number
}

export type FormT<DataT, ErrorT> = {
  onSubmit: (data: DataT, reset: () => void) => void
  error: Partial<ErrorT>
  isLoading: boolean
}
