import { useState } from 'react'

import type { NewPasswordDataT } from './types'

export const useNewPasswordForm = (
  onSubmit: (data: NewPasswordDataT, reset: () => void) => void,
) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const resetForm = (): void => {
    setPassword('')
    setConfirmPassword('')
  }

  const handelPassword = (password: string): void => {
    setPassword(password)

    if (password === confirmPassword) setPasswordError('Passwords must match!')
  }

  const handelConfirmPassword = (password: string): void => {
    setConfirmPassword(password)

    if (password === confirmPassword) setPasswordError('Passwords must match!')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setPasswordError('Passwords must match!')

      return
    }

    onSubmit({ password, confirmPassword }, resetForm)
  }

  return {
    passwordError,
    handleSubmit,
    handelConfirmPassword,
    handelPassword,
    password,
    confirmPassword,
  }
}
