import { useState } from 'react'

import type { LoginFormDataT } from 'src/features/LoginForm/types'
import type { FormT } from 'src/types'

import Button from 'src/components/Button'
import Input from 'src/components/Input'
import Link from 'src/components/Link'
import Loader from 'src/components/Loader'
import Stack from 'src/components/Stack'
import Text from 'src/components/Text'
import { InputPassword } from 'src/features/InputPassword'
import s from 'src/features/LoginForm/styles.module.css'
import { RoutesPath } from 'src/router/routes'

type LoginFormProps = {
  onSubmit: (data: LoginFormDataT, reset: () => void) => void
} & FormT

export const LoginForm = ({
  onSubmit,
  error,
  isLoading,
}: LoginFormProps): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const resetForm = (): void => {
    setPassword(password)
    setEmail(email)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    onSubmit({ email, password }, resetForm)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={25}>
        <Stack gap={5}>
          <Input
            onChange={setEmail}
            value={email}
            type="email"
            placeholder="Work email"
            required
            isError={!!error.email}
          />
          {error.email ? <Text status="error">{error.email}</Text> : null}
        </Stack>
        <Stack gap={5}>
          <InputPassword
            onChange={setPassword}
            value={password}
            isError={!!error.password}
          />
          {error.password ? <Text color="red">{error.password}</Text> : null}
        </Stack>
      </Stack>
      <Link className={s.forgot_password} to={RoutesPath.FORGOT_PASSWORD}>
        Forgot your password?
      </Link>
      <Button
        disabled={isLoading}
        className={s.button}
        variant="contained"
        type="submit"
      >
        {isLoading ? <Loader color="white" size={12} /> : 'Log in to Qencode'}
      </Button>
    </form>
  )
}
