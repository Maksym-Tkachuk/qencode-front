import Button from 'src/components/Button'
import Stack from 'src/components/Stack'
import Text from 'src/components/Text'
import { InputPassword } from 'src/features/InputPassword'
import { AuthLayout } from 'src/layouts/AuthLayout'

const NewPassword = (): JSX.Element => {
  return (
    <AuthLayout title="Create new Password?">
      <form>
        <Stack gap={25}>
          <InputPassword label={<Text variant="body1">Password</Text>} />
          <InputPassword label={<Text variant="body1">Confirm Password</Text>} />
          <Button type="submit" variant="contained">
            Reset Password
          </Button>
        </Stack>
      </form>
    </AuthLayout>
  )
}

export default NewPassword
