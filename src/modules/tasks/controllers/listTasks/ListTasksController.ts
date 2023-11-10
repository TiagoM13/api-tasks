import { Request, Response } from "express"

import { ListTasksService } from "./ListTasksService"

class ListTasksController {
  constructor(private listTasks: ListTasksService) { }

  async handle(_req: Request, res: Response) {
    const tasks = await this.listTasks.execute()

    return res.json(tasks)
  }
}

export { ListTasksController }
