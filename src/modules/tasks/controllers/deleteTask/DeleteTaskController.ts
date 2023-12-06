import { Request, Response } from "express"

import { paramsSchema } from "@modules/tasks/schemas/task.schema"
import { DeleteTaskService } from "./DeleteTaskService"

class DeleteTaskController {
  constructor(private deleteTask: DeleteTaskService) { }

  async handle(req: Request, res: Response) {
    const { id } = paramsSchema.parse(req.params)

    await this.deleteTask.execute(id)

    return res.status(201).json()
  }
}

export { DeleteTaskController }
