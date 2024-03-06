import github from 'src/assets/images/svg/github.svg'
import google from 'src/assets/images/svg/google.svg'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import Link from 'src/components/Link'
import Stack from 'src/components/Stack'
import Text from 'src/components/Text'
import { Delimitation } from 'src/features/Delimitation'
import { InputPassword } from 'src/features/InputPassword'
import { AuthLayout } from 'src/layouts/AuthLayout'
import s from 'src/pages/Login/styles.module.css'
import { RoutesPath } from 'src/router/routes'

const Login = (): JSX.Element => {
  return (
    <AuthLayout title="Log in to your account">
      <Stack>
        <Stack direction="row" gap={16}>
          <Button variant="outlined" icon={<img src={google} alt="google" />}>
            Google
          </Button>
          <Button variant="outlined" icon={<img src={github} alt="github" />}>
            Github
          </Button>
        </Stack>

        <div className={s.line}>
          <Delimitation />
        </div>

        <form>
          <Stack gap={25}>
            <Input type="email" />
            <InputPassword />
          </Stack>
          <Link className={s.forgot_password} to={RoutesPath.FORGOT_PASSWORD}>
            Forgot your password?
          </Link>
          <Button className={s.button} variant="contained">
            Log in to Qencode
          </Button>
        </form>

        <Stack className={s.caption} direction="row" justifyContent="center" gap={5}>
          <Text variant="body2">Is your company new to Qencode?</Text>
          <Link to="/">Sign up</Link>
        </Stack>
      </Stack>
    </AuthLayout>
  )
}

export default Login
