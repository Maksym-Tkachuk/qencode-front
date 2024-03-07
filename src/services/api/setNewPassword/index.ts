import type {
  ResponseSetNewPasswordT,
  SetNewPasswordArgsT,
} from 'src/services/api/setNewPassword/types'

import { api } from 'src/configs/api'
import { Endpoints } from 'src/services/api/endpoints'

export const setNewPassword = async (
  data: SetNewPasswordArgsT,
): Promise<ResponseSetNewPasswordT> => {
  const response = await api.post(Endpoints.NEW_PASSWORD, data)

  return response.data
}
