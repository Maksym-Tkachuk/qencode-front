import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

import type { AxiosError } from 'axios'
import type {
  ResetPasswordArgsT,
  ResponseResetPasswordT,
} from 'src/services/api/resetPassword/types'
import type { ResponseErrorT } from 'src/types'

import { ErrorStatus } from 'src/constants'
import { isString } from 'src/helpers/isString'
import { parseError } from 'src/helpers/parseError'
import { resetPassword } from 'src/services/api/resetPassword'

export const useResetPassword = () => {
  const { isLoading, error, mutate } = useMutation<
    ResponseResetPasswordT,
    AxiosError<ResponseErrorT>,
    ResetPasswordArgsT
  >({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast.success('Password has been successfully reset!')
    },
    onError: e => {
      const errorDetail = e.response?.data.detail

      if (ErrorStatus.INVALID_USER === e.response?.status && isString(errorDetail)) {
        toast.error(errorDetail)
      }

      if (e.response?.status && e.response?.status >= 500) {
        toast.error('Server error!')
      }
    },
  })

  return {
    isLoading,
    error: error?.response ? parseError(error?.response?.data) : {},
    mutate,
  }
}
