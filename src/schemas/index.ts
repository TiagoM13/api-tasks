import { z } from 'zod'

export const paramsSchema = z.object({
  id: z.string().uuid()
})

export const schemaBody = z.object({
  title: z.string(),
  status: z.optional(z.enum(["completed", "pending"])),
})
