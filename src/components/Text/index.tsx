import s from 'src/components/Text/styles.module.css'

type TextProps = {
  variant?: 'h1' | 'body1' | 'body2' | 'body3'
  status?: 'error' | 'success'
} & React.HTMLAttributes<HTMLParagraphElement>

const Text = ({
  variant = 'body2',
  className,
  status,
  ...props
}: TextProps): JSX.Element => {
  return (
    <p
      className={`${s[variant]} ${s.text} ${s[status || '']} ${className}`}
      {...props}
    />
  )
}

export default Text
