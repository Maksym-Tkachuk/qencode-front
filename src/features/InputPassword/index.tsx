import { useState } from 'react'

import type { ReactNode } from 'react'

import eye from 'src/assets/images/svg/eye.svg'
import Input from 'src/components/Input'

type InputPasswordProps = {
  onChange?: (value: string) => void
  label?: ReactNode
  value?: string
}

export const InputPassword = ({
  onChange,
  value,
  label,
}: InputPasswordProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false)

  const handleVisible = (): void => {
    setIsVisible(prev => !prev)
  }

  return (
    <Input
      label={label}
      placeholder="Password"
      type={isVisible ? 'text' : 'password'}
      onChange={onChange}
      value={value}
      minLength={8}
      required
      icon={
        <div
          onClick={handleVisible}
          onKeyDown={handleVisible}
          role="button"
          tabIndex={0}
        >
          <img src={eye} alt="eye" />
        </div>
      }
    />
  )
}
