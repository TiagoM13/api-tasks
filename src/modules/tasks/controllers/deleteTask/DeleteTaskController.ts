import { Request, Response } from "express"

import { AppError } from "@app/errors/AppError"
import { paramsSchema } from "@modules/tasks/schemas/task.schema"
import { DeleteTaskService } from "./DeleteTaskService"

class DeleteTaskController {
  constructor(private deleteTask: DeleteTaskService) { }

  async handle(req: Request, res: Response) {
    const { id } = paramsSchema.parse(req.params)

    try {
      await this.deleteTask.execute(id)
      return res.status(201).json()
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message })
      }

      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}

export { DeleteTaskController }
