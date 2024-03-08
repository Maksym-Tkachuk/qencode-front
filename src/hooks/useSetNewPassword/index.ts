import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

import type { AxiosError } from 'axios'
import type { NewPasswordFormErrorFields } from 'src/features/NewPasswordForm/types'
import type {
  ResponseSetNewPasswordT,
  SetNewPasswordArgsT,
} from 'src/services/api/setNewPassword/types'
import type { ResponseErrorT } from 'src/types'

import { handleError } from 'src/configs/queryClient'
import { ErrorStatus } from 'src/constants'
import { isString } from 'src/helpers/isString'
import { parseError } from 'src/helpers/parseError'
import { setNewPassword } from 'src/services/api/setNewPassword'

export const useSetNewPassword = () => {
  const { isLoading, error, mutate } = useMutation<
    ResponseSetNewPasswordT,
    AxiosError<ResponseErrorT>,
    SetNewPasswordArgsT
  >({
    mutationFn: setNewPassword,
    onSuccess: () => {
      toast.success('Password has been successfully updated!')
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
      ? parseError<NewPasswordFormErrorFields>(error?.response?.data)
      : {},
    mutate,
  }
}
