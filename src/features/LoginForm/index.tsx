import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo } from 'react'
import { useForm, Controller } from 'react-hook-form'

import type {
  LoginFormErrorFieldsT,
  LoginFormDataT,
} from 'src/features/LoginForm/types'
import type { FormT } from 'src/types'

import Button from 'src/components/Button'
import Input from 'src/components/Input'
import Link from 'src/components/Link'
import Loader from 'src/components/Loader'
import Stack from 'src/components/Stack'
import Text from 'src/components/Text'
import InputPassword from 'src/features/InputPassword'
import { schema } from 'src/features/LoginForm/schema'
import s from 'src/features/LoginForm/styles.module.css'
import { RoutesPath } from 'src/router/routes'

type LoginFormProps = FormT<LoginFormDataT, LoginFormErrorFieldsT>

export const LoginForm = ({
  onSubmit,
  error,
  isLoading,
}: LoginFormProps): JSX.Element => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<LoginFormDataT>({
    resolver: zodResolver(schema),
  })

  const onSubmitForm = (data: LoginFormDataT): void => {
    onSubmit(data, reset)
  }

  const combineErrors = useMemo(
    () => ({
      email: errors.email?.message || error?.email,
      password: errors.password?.message || error?.password,
    }),
    [error.email, error.password, errors.email?.message, errors.password?.message],
  )

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Stack gap={25}>
        <Stack gap={5}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Work email"
                isError={!!combineErrors.email}
              />
            )}
          />
          {combineErrors.email && <Text status="error">{combineErrors.email}</Text>}
        </Stack>
        <Stack gap={5}>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputPassword {...field} isError={!!combineErrors.password} />
            )}
          />
          {combineErrors.password && (
            <Text status="error">{combineErrors.password}</Text>
          )}
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
        icon={isLoading && <Loader color="white" size={20} />}
      >
        {!isLoading && 'Log in to Qencode'}
      </Button>
    </form>
  )
}
