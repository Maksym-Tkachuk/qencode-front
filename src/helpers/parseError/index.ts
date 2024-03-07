import type { ResponseErrorT } from 'src/types'

import { isString } from 'src/helpers/isString'

export const parseError = ({ detail }: ResponseErrorT): Record<string, string> => {
  if (isString(detail)) return {}

  const errorObject: Record<string, string> = {}

  detail.forEach(({ error, field_name }) => {
    errorObject[field_name] = error
  })

  return errorObject
}
