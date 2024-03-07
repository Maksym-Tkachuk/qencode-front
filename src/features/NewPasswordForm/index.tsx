import type { NewPasswordDataT } from './types'
import type { FormT } from 'src/types'

import Button from 'src/components/Button'
import Loader from 'src/components/Loader'
import Stack from 'src/components/Stack'
import Text from 'src/components/Text'
import { InputPassword } from 'src/features/InputPassword'
import { useNewPasswordForm } from 'src/features/NewPasswordForm/useNewPasswordForm'

type NewPasswordFormProps = {
  onSubmit: (data: NewPasswordDataT, reset: () => void) => void
} & FormT

export const NewPasswordForm = ({
  onSubmit,
  error,
  isLoading,
}: NewPasswordFormProps): JSX.Element => {
  const {
    handelConfirmPassword,
    handelPassword,
    handleSubmit,
    passwordError,
    confirmPassword,
    password,
  } = useNewPasswordForm(onSubmit)

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={25}>
        <Stack gap={5}>
          <InputPassword
            value={password}
            onChange={handelPassword}
            label={<Text variant="body1">Password</Text>}
            isError={!!error.password}
          />
          {error.password || passwordError ? (
            <Text status="error">{error.password || passwordError}</Text>
          ) : null}
        </Stack>
        <Stack gap={5}>
          <InputPassword
            value={confirmPassword}
            onChange={handelConfirmPassword}
            label={<Text variant="body1">Confirm Password</Text>}
            isError={!!error.password}
          />
          {error.password || passwordError ? (
            <Text status="error">{error.password || passwordError}</Text>
          ) : null}
        </Stack>

        <Button disabled={isLoading} type="submit" variant="contained">
          {isLoading ? <Loader color="white" size={12} /> : 'Reset Password'}
        </Button>
      </Stack>
    </form>
  )
}
