import { Request, Response } from "express";

import { AppError } from "@app/errors/AppError";
import { schemaBody } from "@modules/tasks/schemas/task.schema"
import { CreateTaskService } from "./CreateTaskService";

class CreateTaskController {
  constructor(private createTask: CreateTaskService) { }

  async handle(req: Request, res: Response) {
    const { title } = schemaBody.parse(req.body);

    try {
      const task = await this.createTask.execute(title);
      return res.status(201).json(task);
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message })
      }

      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export { CreateTaskController }
