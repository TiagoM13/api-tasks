import { Request, Response } from "express"

import { AppError } from "@app/errors/AppError"
import { paramsSchema } from "@modules/tasks/schemas/task.schema"
import { ToggleTaskStatusService } from "./ToggleTaskStatusService"

class ToggleTaskStatusController {
  constructor(private toggleTaskStatus: ToggleTaskStatusService) { }

  async handle(req: Request, res: Response) {
    const { id } = paramsSchema.parse(req.params)

    try {
      const task = await this.toggleTaskStatus.execute(id)
      return res.status(200).json(task)
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message })
      }

      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export { ToggleTaskStatusController }
