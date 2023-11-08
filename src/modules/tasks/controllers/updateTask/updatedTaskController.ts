import { Request, Response } from "express";

import { paramsSchema, schemaBody } from "@modules/tasks/schemas/task.schema"
import TaskModel from "@modules/tasks/models/task.model"

class UpdatedTaskController {
  async updateTask(req: Request, res: Response) {
    try {
      const { id } = paramsSchema.parse(req.params)
      const { title } = schemaBody.parse(req.body)

      let task = await TaskModel.findTaskById(id)

      if (!task) {
        return res.status(404).json({ message: 'Task not found.' })
      }

      if (title.trim() === '') {
        return res.status(400).json({ message: 'The “title” field is mandatory.' });
      }

      if (title.length < 2) {
        return res.status(404).json({ message: 'The "title" field must contain at least 2 characters.' })
      }

      task = await TaskModel.updateTask(id, title)

      return res.status(201).json(task)
    } catch (error) {
      return res.status(500).json({ message: 'Error updating task' });
    }
  }
}

export default new UpdatedTaskController()
