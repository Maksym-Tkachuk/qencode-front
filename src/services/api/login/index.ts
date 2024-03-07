import type { LoginParamsT, ResponseLoginT } from 'src/services/api/login/types'

import { api } from 'src/configs/api'
import { Endpoints } from 'src/services/api/endpoints'

export const login = async (data: LoginParamsT): Promise<ResponseLoginT> => {
  const response = await api.post(Endpoints.LOGIN, data)

  return response.data
}
