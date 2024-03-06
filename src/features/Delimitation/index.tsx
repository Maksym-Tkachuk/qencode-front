import Text from 'src/components/Text'
import s from 'src/features/Delimitation/styles.module.css'

export const Delimitation = (): JSX.Element => {
  return (
    <div className={s.container}>
      <Text className={s.text} variant="body3">
        OR
      </Text>
    </div>
  )
}
