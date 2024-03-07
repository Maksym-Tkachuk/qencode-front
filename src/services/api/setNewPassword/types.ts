export type SetNewPasswordArgsT = {
  token: string
  secret: string
  password: string
  password_confirm: string
}

export type ResponseSetNewPasswordT = {
  error: number
  detail: string[]
  timestamp: number
}
