import { forwardRef, useState } from 'react'

import type { ReactNode, Ref } from 'react'

import eye from 'src/assets/images/svg/eye.svg'
import Input from 'src/components/Input'

type InputPasswordProps = {
  onChange?: (value: string) => void
  label?: ReactNode
  value?: string
  isError?: boolean
}

const InputPassword = (
  { onChange, value, label, isError }: InputPasswordProps,
  ref: Ref<HTMLInputElement>,
): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false)

  const handleVisible = (): void => {
    setIsVisible(prev => !prev)
  }

  return (
    <Input
      label={label}
      ref={ref}
      placeholder="Password"
      type={isVisible ? 'text' : 'password'}
      onChange={onChange}
      value={value}
      isError={isError}
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

export default forwardRef(InputPassword)
