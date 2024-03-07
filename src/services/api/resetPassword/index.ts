import type {
  ResetPasswordArgsT,
  ResponseResetPasswordT,
} from 'src/services/api/resetPassword/types'

import { api } from 'src/configs/api'
import { Endpoints } from 'src/services/api/endpoints'

export const resetPassword = async (
  data: ResetPasswordArgsT,
): Promise<ResponseResetPasswordT> => {
  const response = await api.post(Endpoints.RESET_PASSWORD, data)

  return response.data
}
