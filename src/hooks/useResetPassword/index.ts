import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

import type { AxiosError } from 'axios'
import type { ResetPasswordFormErrorFieldsT } from 'src/features/ResetPasswordForm/types'
import type {
  ResetPasswordArgsT,
  ResponseResetPasswordT,
} from 'src/services/api/resetPassword/types'
import type { ResponseErrorT } from 'src/types'

import { handleError } from 'src/configs/queryClient'
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
      handleError(e)

      const errorDetail = e.response?.data.detail

      if (ErrorStatus.INVALID_USER === e.response?.status && isString(errorDetail)) {
        toast.error(errorDetail)
      }
    },
  })

  return {
    isLoading,
    error: error?.response
      ? parseError<ResetPasswordFormErrorFieldsT>(error?.response?.data)
      : {},
    mutate,
  }
}
