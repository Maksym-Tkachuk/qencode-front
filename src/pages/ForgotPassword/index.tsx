import type { ResetPasswordFormDataT } from 'src/features/ResetPasswordForm/types'

import { ResetPasswordForm } from 'src/features/ResetPasswordForm'
import { useResetPassword } from 'src/hooks/useResetPassword'
import { AuthLayout } from 'src/layouts/AuthLayout'

const ForgotPassword = (): JSX.Element => {
  const { error, isLoading, mutate } = useResetPassword()

  const handleSubmit = (data: ResetPasswordFormDataT, reset: () => void): void => {
    mutate(data, {
      onSuccess: reset,
    })
  }

  return (
    <AuthLayout title="Forgot Password?">
      <ResetPasswordForm
        error={error}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  )
}

export default ForgotPassword
