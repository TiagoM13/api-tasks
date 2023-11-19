import { Request, Response } from "express";

import { schemaBody } from "@modules/tasks/schemas/task.schema"
import { CreateTaskService } from "./CreateTaskService";

class CreateTaskController {
  constructor(private createTask: CreateTaskService) { }

  async handle(req: Request, res: Response) {
    const { title } = schemaBody.parse(req.body);

    const task = await this.createTask.execute(title)

    return res.status(201).json(task)
  }
}

export { CreateTaskController }