import { AppError } from '@app/errors/AppError'
import { type NextFunction, type Request, type Response } from 'express'

import { ZodError } from 'zod'

export async function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction
): Promise<Response> {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message })
  }

  if (error instanceof ZodError) {
    return response.status(422).json({
      message: 'Invalid request body',
      errors: error.errors
    })
  }

  console.log(error)

  return response.status(500).json({ message: 'Internal Server Error' })
}
