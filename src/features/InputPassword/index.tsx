import { useState } from 'react'

import eye from 'src/assets/images/svg/eye.svg'
import Input from 'src/components/Input'
import s from 'src/features/InputPassword/styles.module.css'

type InputPasswordProps = {
  onChange?: (value: string) => void
}

export const InputPassword = ({ onChange }: InputPasswordProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false)

  const handleVisible = (): void => {
    setIsVisible(prev => !prev)
  }

  return (
    <div className={s.container}>
      <Input type={isVisible ? 'text' : 'password'} onChange={onChange} />
      <div
        onClick={handleVisible}
        onKeyDown={handleVisible}
        role="button"
        tabIndex={0}
        className={s.eye_icon}
      >
        <img src={eye} alt="eye" />
      </div>
    </div>
  )
}
