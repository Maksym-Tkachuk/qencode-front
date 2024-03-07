export type LoginArgsT = {
  email: string
  password: string
}

export type ResponseLoginT = {
  error: number
  detail: string[]
  timestamp: number
  access_token: string
  refresh_token: string
  token_expire: number
  refresh_token_expire: number
}
