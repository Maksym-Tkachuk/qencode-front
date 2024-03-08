import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'

import type { NewPasswordDataT, NewPasswordFormErrorFields } from './types'
import type { FormT } from 'src/types'

import Button from 'src/components/Button'
import Loader from 'src/components/Loader'
import Stack from 'src/components/Stack'
import Text from 'src/components/Text'
import InputPassword from 'src/features/InputPassword'
import { schema } from 'src/features/NewPasswordForm/schema'

type NewPasswordFormProps = FormT<NewPasswordDataT, NewPasswordFormErrorFields>

export const NewPasswordForm = ({
  onSubmit,
  error,
  isLoading,
}: NewPasswordFormProps): JSX.Element => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<NewPasswordDataT>({
    resolver: zodResolver(schema),
  })

  const onSubmitForm = (data: NewPasswordDataT): void => {
    onSubmit(data, reset)
  }

  const combineErrors = useMemo(
    () => ({
      confirmPassword: errors.confirmPassword?.message || error?.password,
      password: errors.password?.message || error?.password,
    }),
    [error?.password, errors.confirmPassword?.message, errors.password?.message],
  )

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Stack gap={25}>
        <Stack gap={5}>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputPassword
                label={<Text variant="body1">Password</Text>}
                {...field}
                isError={!!combineErrors.password}
              />
            )}
          />
          {combineErrors.password && (
            <Text status="error">{combineErrors.password}</Text>
          )}
        </Stack>
        <Stack gap={5}>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputPassword
                label={<Text variant="body1">Confirm Password</Text>}
                {...field}
                isError={!!combineErrors.confirmPassword}
              />
            )}
          />

          {combineErrors.confirmPassword && (
            <Text status="error">{combineErrors.confirmPassword}</Text>
          )}
        </Stack>

        <Button
          disabled={isLoading}
          type="submit"
          variant="contained"
          icon={isLoading && <Loader color="white" size={20} />}
        >
          {!isLoading && 'Reset Password'}
        </Button>
      </Stack>
    </form>
  )
}
