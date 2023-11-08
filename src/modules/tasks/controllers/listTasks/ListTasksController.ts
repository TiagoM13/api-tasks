import { Request, Response } from "express"

import TaskModel from "@modules/tasks/models/task.model"

class ListTasksController {
  async listTasks(_req: Request, res: Response) {
    try {
      const tasks = await TaskModel.findTasks()

      return res.json(tasks)
    } catch (error) {
      return res.status(404).json({ message: "Error listing tasks" })
    }
  }
}

export default new ListTasksController()
