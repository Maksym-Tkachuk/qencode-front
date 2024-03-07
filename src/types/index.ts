type DetailErrorT = {
  field_name: string
  error: string
}

export type ResponseErrorT = {
  error: number
  detail: DetailErrorT[] | string
  timestamp: number
}
