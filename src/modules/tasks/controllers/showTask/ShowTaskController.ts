import { Request, Response } from "express"

import { AppError } from "@app/errors/AppError"
import { paramsSchema } from "@modules/tasks/schemas/task.schema"
import { ShowTaskService } from "./ShowTaskService"

class ShowTaskController {
  constructor(private showTask: ShowTaskService) { }

  async handle(req: Request, res: Response) {
    const { id } = paramsSchema.parse(req.params)

    try {
      const task = await this.showTask.execute(id)
      return res.status(200).json(task)
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message })
      }

      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export { ShowTaskController }
