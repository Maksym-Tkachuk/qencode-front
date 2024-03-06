import type { ReactNode } from 'react'

import s from 'src/components/Input/styles.module.css'
import Stack from 'src/components/Stack'

type InputProps = {
  onChange?: (value: string) => void
  label?: ReactNode
  icon?: JSX.Element
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>

const Input = ({
  onChange = () => {},
  className,
  label,
  icon,
  ...props
}: InputProps): JSX.Element => {
  return (
    <Stack gap={8}>
      {label}
      <div className={s.input_container}>
        <input
          onChange={({ target }) => onChange(target.value)}
          className={`${s.input} ${className}`}
          type="text"
          {...props}
        />
        <div className={s.icon}>{icon}</div>
      </div>
    </Stack>
  )
}

export default Input
