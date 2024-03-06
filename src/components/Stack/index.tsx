import type { CSSProperties } from 'react'

type StackProps = {
  direction: CSSProperties['flexDirection']
  align: CSSProperties['alignItems']
  gap: CSSProperties['gap']
  justifyContent: CSSProperties['justifyContent']
} & React.HTMLAttributes<HTMLDivElement>

const Stack = ({
  align,
  direction = 'column',
  gap,
  justifyContent,
  ...props
}: StackProps): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: align,
        flexDirection: direction,
        gap,
        justifyContent,
      }}
      {...props}
    />
  )
}

export default Stack
