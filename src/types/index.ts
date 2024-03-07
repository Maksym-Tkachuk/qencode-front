type DetailErrorT = {
  field_name: string
  error: string
}

export type ResponseErrorT = {
  error: number
  detail: DetailErrorT[] | string
  timestamp: number
}

export type FormT = {
  error: Record<string, string>
  isLoading: boolean
}
