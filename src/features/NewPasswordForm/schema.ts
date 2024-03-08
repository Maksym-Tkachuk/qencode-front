import { z } from 'zod'

export const schema = z
  .object({
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine(data => data.confirmPassword === data.password, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
