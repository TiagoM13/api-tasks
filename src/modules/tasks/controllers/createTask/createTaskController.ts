import { Request, Response } from "express";

import { schemaBody } from "@modules/tasks/schemas/task.schema"
import TaskModel from "@modules/tasks/models/task.model"

class CreateTaskController {
  async createTask(req: Request, res: Response) {
    try {
      const { title } = schemaBody.parse(req.body)

      if (title.trim() === '') {
        return res.status(400).json({ message: 'The “title” field is mandatory.' });
      }

      if (title.length < 2) {
        return res.status(404).json({ message: 'The "title" field must contain at least 2 characters.' })
      }

      const task = await TaskModel.createTask(title)

      return res.status(201).json(task)
    } catch (error) {
      return res.status(500).json({ message: 'Error creating task' });
    }
  }
}

export default new CreateTaskController()