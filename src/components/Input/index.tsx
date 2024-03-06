import s from 'src/components/Input/styles.module.css'

type InputProps = {
  onChange?: (value: string) => void
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>

const Input = ({ onChange = () => {}, ...props }: InputProps): JSX.Element => {
  return (
    <input
      onChange={({ target }) => onChange(target.value)}
      className={s.input}
      type="text"
      {...props}
    />
  )
}

export default Input
