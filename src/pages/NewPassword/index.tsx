import type { NewPasswordDataT } from 'src/features/NewPasswordForm/types'

import { LocalStorageKeys } from 'src/constants'
import { NewPasswordForm } from 'src/features/NewPasswordForm'
import { useSetNewPassword } from 'src/hooks/useSetNewPassword'
import { AuthLayout } from 'src/layouts/AuthLayout'

const NewPassword = (): JSX.Element => {
  const { error, isLoading, mutate } = useSetNewPassword()

  const handleSubmit = (
    { confirmPassword, password }: NewPasswordDataT,
    reset: () => void,
  ): void => {
    mutate(
      {
        password_confirm: confirmPassword,
        password,
        token: localStorage.getItem(LocalStorageKeys.REFRESH_TOKEN) || '',
        secret: localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN) || '',
      },
      { onSuccess: reset },
    )
  }

  return (
    <AuthLayout title="Create new Password?">
      <NewPasswordForm onSubmit={handleSubmit} error={error} isLoading={isLoading} />
    </AuthLayout>
  )
}

export default NewPassword
