import s from 'src/components/Button/styles.module.css'

type ButtonProps = {
  variant?: 'contained' | 'outlined'
  icon?: JSX.Element
} & React.HTMLAttributes<HTMLButtonElement>

const Button = ({
  variant = 'outlined',
  icon,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button className={`${s[variant]} ${s.button}`} type="button" {...props}>
      {icon}
      <p className={s.text}>{children}</p>
    </button>
  )
}

export default Button
