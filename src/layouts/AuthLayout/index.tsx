import logo from 'src/assets/images/svg/logo.svg'
import Stack from 'src/components/Stack'
import Text from 'src/components/Text'
import s from 'src/layouts/AuthLayout/styles.module.css'

type AuthLayoutProps = {
  title: string
} & React.HTMLAttributes<HTMLDivElement>

export const AuthLayout = ({
  title,
  children,
  ...props
}: AuthLayoutProps): JSX.Element => {
  return (
    <Stack align="center" className={s.container} {...props}>
      <img src={logo} alt="logo" />
      <Text className={s.text} variant="h1">
        {title}
      </Text>
      <div className={s.content}>{children}</div>
    </Stack>
  )
}
