import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'

import type {
  ResetPasswordFormDataT,
  ResetPasswordFormErrorFieldsT,
} from 'src/features/ResetPasswordForm/types'
import type { FormT } from 'src/types'

import Button from 'src/components/Button'
import Input from 'src/components/Input'
import Link from 'src/components/Link'
import Loader from 'src/components/Loader'
import Stack from 'src/components/Stack'
import Text from 'src/components/Text'
import { schema } from 'src/features/ResetPasswordForm/schema'
import { RoutesPath } from 'src/router/routes'

type ResetPasswordFormProps = FormT<
  ResetPasswordFormDataT,
  ResetPasswordFormErrorFieldsT
>

export const ResetPasswordForm = ({
  error,
  isLoading,
  onSubmit,
}: ResetPasswordFormProps): JSX.Element => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ResetPasswordFormDataT>({
    resolver: zodResolver(schema),
  })

  const onSubmitForm = (data: ResetPasswordFormDataT): void => {
    onSubmit(data, reset)
  }

  const combineErrors = useMemo(
    () => ({
      email: errors.email?.message || error?.email,
    }),
    [error?.email, errors.email?.message],
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
                placeholder="Enter your email"
                isError={!!combineErrors.email}
              />
            )}
          />
          {combineErrors.email && <Text status="error">{combineErrors.email}</Text>}

          {error.email ? <Text status="error">{error.email}</Text> : null}
        </Stack>

        <Button
          disabled={isLoading}
          type="submit"
          variant="contained"
          icon={isLoading && <Loader color="white" size={20} />}
        >
          {!isLoading && 'Send'}
        </Button>

        <Link to={RoutesPath.LOGIN}>
          <Button>Cancel</Button>
        </Link>
      </Stack>
    </form>
  )
}
