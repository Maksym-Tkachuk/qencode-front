import { QueryClient } from 'react-query'
import { toast } from 'react-toastify'

import type { AxiosError } from 'axios'

import { ErrorStatus } from 'src/constants'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
})

export const handleError = ({ response }: AxiosError): void => {
  if (!response?.status) return

  if (response?.status >= ErrorStatus.SERVER_ERROR) {
    toast.error('Server error!')
  }

  if (response?.status === ErrorStatus.TOO_MANY_REQUESTS) {
    toast.error('Too many requests')
  }
}
