import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

import type { AxiosError } from 'axios'
import type { LoginArgsT, ResponseLoginT } from 'src/services/api/login/types'
import type { ResponseErrorT } from 'src/types'

import { ErrorStatus, LocalStorageKeys } from 'src/constants'
import { isString } from 'src/helpers/isString'
import { parseError } from 'src/helpers/parseError'
import { login } from 'src/services/api/login'

export const useLogin = () => {
  const { isLoading, error, mutate } = useMutation<
    ResponseLoginT,
    AxiosError<ResponseErrorT>,
    LoginArgsT
  >({
    mutationFn: login,
    onSuccess: data => {
      localStorage.setItem(LocalStorageKeys.REFRESH_TOKEN, data.refresh_token)
      localStorage.setItem(LocalStorageKeys.ACCESS_TOKEN, data.access_token)
      localStorage.setItem(
        LocalStorageKeys.REFRESH_TOKEN_EXPIRE,
        String(data.refresh_token_expire),
      )

      toast.success('The user has successfully logged!')
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
