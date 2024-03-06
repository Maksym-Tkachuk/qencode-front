import s from 'src/components/Text/styles.module.css'

type TextProps = {
  variant: 'h1' | 'body1' | 'body2' | 'body3'
} & React.HTMLAttributes<HTMLParagraphElement>

const Text = ({ variant, className, ...props }: TextProps): JSX.Element => {
  return <p className={`${s[variant]} ${s.text} ${className}`} {...props} />
}

export default Text
