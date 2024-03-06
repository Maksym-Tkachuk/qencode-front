import Button from 'src/components/Button'
import Input from 'src/components/Input'
import Link from 'src/components/Link'
import Stack from 'src/components/Stack'
import { AuthLayout } from 'src/layouts/AuthLayout'
import { RoutesPath } from 'src/router/routes'

const ForgotPassword = (): JSX.Element => {
  return (
    <AuthLayout title="Forgot Password?">
      <form>
        <Stack gap={25}>
          <Input placeholder="Enter your email" />
          <Button type="submit" variant="contained">
            Send
          </Button>

          <Link to={RoutesPath.LOGIN}>
            <Button>Cancel</Button>
          </Link>
        </Stack>
      </form>
    </AuthLayout>
  )
}

export default ForgotPassword
