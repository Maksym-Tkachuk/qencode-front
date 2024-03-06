import { useState } from 'react'

import type { ReactNode } from 'react'

import eye from 'src/assets/images/svg/eye.svg'
import Input from 'src/components/Input'

type InputPasswordProps = {
  onChange?: (value: string) => void
  label?: ReactNode
}

export const InputPassword = ({
  onChange,
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
