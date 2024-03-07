import s from 'src/components/Loader/styles.module.css'

type LoaderProps = {
  size?: number
  color?: string
}

const Loader = ({ color = '#316fea', size = 50 }: LoaderProps): JSX.Element => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderColor: color,
        borderTopColor: 'transparent',
      }}
      className={s.loader}
    />
  )
}

export default Loader
