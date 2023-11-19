import { Request, Response } from "express";

import { paramsSchema, schemaBody } from "@modules/tasks/schemas/task.schema"
import { UpdatedTaskService } from "./UpdatedTaskService";

class UpdatedTaskController {
  constructor(private updatedTask: UpdatedTaskService) { }

  async handle(req: Request, res: Response) {
    const { id } = paramsSchema.parse(req.params)
    const { title } = schemaBody.parse(req.body)

    const task = await this.updatedTask.execute(id, title)

    return res.status(201).json(task)
  }
}

export { UpdatedTaskController }
