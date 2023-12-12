import { Request, Response } from "express";

import { AppError } from "@app/errors/AppError";
import { paramsSchema, schemaBody } from "@modules/tasks/schemas/task.schema"
import { UpdatedTaskService } from "./UpdatedTaskService";

class UpdatedTaskController {
  constructor(private updatedTask: UpdatedTaskService) { }

  async handle(req: Request, res: Response) {
    const { id } = paramsSchema.parse(req.params)
    const { title } = schemaBody.parse(req.body)

    try {
      const task = await this.updatedTask.execute(id, title)
      return res.status(201).json(task)
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message })
      }

      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export { UpdatedTaskController }
