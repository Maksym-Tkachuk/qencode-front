import type { LoginFormDataT } from 'src/features/LoginForm/types'

import github from 'src/assets/images/svg/github.svg'
import google from 'src/assets/images/svg/google.svg'
import Button from 'src/components/Button'
import Link from 'src/components/Link'
import Stack from 'src/components/Stack'
import Text from 'src/components/Text'
import { Delimitation } from 'src/features/Delimitation'
import { LoginForm } from 'src/features/LoginForm'
import { useLogin } from 'src/hooks/useLogin'
import { AuthLayout } from 'src/layouts/AuthLayout'
import s from 'src/pages/Login/styles.module.css'

const Login = (): JSX.Element => {
  const { error, isLoading, mutate } = useLogin()

  const handleSubmit = (data: LoginFormDataT, reset: () => void): void => {
    mutate(data, {
      onSuccess: reset,
    })
  }

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

        <LoginForm isLoading={isLoading} error={error} onSubmit={handleSubmit} />

        <Stack className={s.caption} direction="row" justifyContent="center" gap={5}>
          <Text variant="body2">Is your company new to Qencode?</Text>
          <Link to="/">Sign up</Link>
        </Stack>
      </Stack>
    </AuthLayout>
  )
}

export default Login
