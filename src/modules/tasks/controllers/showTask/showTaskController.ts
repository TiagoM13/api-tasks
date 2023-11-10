import { Request, Response } from "express"

import { paramsSchema } from "@modules/tasks/schemas/task.schema"
import { ShowTaskService } from "./ShowTaskService"

class ShowTaskController {
  constructor(private showTask: ShowTaskService) { }

  async handle(req: Request, res: Response) {
    const { id } = paramsSchema.parse(req.params)

    const task = await this.showTask.execute(id)

    return res.status(200).json(task)
  }
}

export { ShowTaskController }
