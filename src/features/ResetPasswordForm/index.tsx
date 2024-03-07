import { useState } from 'react'

import type { ResetPasswordFormDataT } from 'src/features/ResetPasswordForm/types'
import type { FormT } from 'src/types'

import Button from 'src/components/Button'
import Input from 'src/components/Input'
import Link from 'src/components/Link'
import Loader from 'src/components/Loader'
import Stack from 'src/components/Stack'
import Text from 'src/components/Text'
import { RoutesPath } from 'src/router/routes'

type ResetPasswordFormProps = {
  onSubmit: (data: ResetPasswordFormDataT, reset: () => void) => void
} & FormT

export const ResetPasswordForm = ({
  error,
  isLoading,
  onSubmit,
}: ResetPasswordFormProps): JSX.Element => {
  const [email, setEmail] = useState('')

  const resetForm = (): void => {
    setEmail('')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    onSubmit({ email }, resetForm)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={25}>
        <Stack gap={5}>
          <Input
            onChange={setEmail}
            value={email}
            required
            type="email"
            placeholder="Enter your email"
          />
          {error.email ? <Text status="error">{error.email}</Text> : null}
        </Stack>

        <Button disabled={isLoading} type="submit" variant="contained">
          {isLoading ? <Loader color="white" size={12} /> : 'Send'}
        </Button>

        <Link to={RoutesPath.LOGIN}>
          <Button>Cancel</Button>
        </Link>
      </Stack>
    </form>
  )
}
