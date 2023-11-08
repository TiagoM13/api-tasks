import { Request, Response } from "express"

import { paramsSchema } from "@app/modules/tasks/schemas/task.schema"
import TaskModel from "@app/modules/tasks/models/task.model"

class ShowTaskController {
  showTask = async (req: Request, res: Response) => {
    try {
      const { id } = paramsSchema.parse(req.params)

      const task = await TaskModel.findTaskById(id)

      if (!task) {
        return res.status(404).json({ message: 'Task not found' })
      }

      return res.status(200).json(task)
    } catch (error) {
      return res.status(500).json({ message: 'Error when searching for task' });
    }
  }
}

export default new ShowTaskController()
