import type { ReactNode } from 'react'

import s from 'src/components/Button/styles.module.css'

type ButtonProps = {
  variant?: 'contained' | 'outlined'
  icon?: ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  variant = 'outlined',
  icon,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${s[variant]} ${s.button} ${className}`}
      type="button"
      {...props}
    >
      {icon}
      <p className={s.text}>{children}</p>
    </button>
  )
}

export default Button
