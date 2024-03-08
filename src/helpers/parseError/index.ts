import type { ResponseErrorT } from 'src/types'

import { isString } from 'src/helpers/isString'

export const parseError = <T extends Record<string, string>>({
  detail,
}: ResponseErrorT): T => {
  if (isString(detail)) return {} as T

  const errorObject: Record<string, string> = {}

  detail.forEach(({ error, field_name }) => {
    errorObject[field_name] = error
  })

  return errorObject as T
}
