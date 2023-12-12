import { Request, Response } from "express"

import { AppError } from "@app/errors/AppError"
import { ListTasksService } from "./ListTasksService"

class ListTasksController {
  constructor(private listTasks: ListTasksService) { }

  async handle(_req: Request, res: Response) {
    const tasks = await this.listTasks.execute()

    try {
      return res.json(tasks)
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message })
      }

      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export { ListTasksController }
