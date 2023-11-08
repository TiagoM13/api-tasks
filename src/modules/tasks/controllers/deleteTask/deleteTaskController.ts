import { Request, Response } from "express"

import { paramsSchema } from "@app/modules/tasks/schemas/task.schema"
import TaskModel from "@app/modules/tasks/models/task.model"

class DeleteTaskController {
  async deleteTask(req: Request, res: Response) {
    try {
      const { id } = paramsSchema.parse(req.params)

      const task = await TaskModel.findTaskById(id)

      if (!task) {
        return res.status(404).json({ message: 'Task not found' })
      }

      await TaskModel.deleteTask(id)

      return res.status(204).json()
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting task' });
    }
  }
}

export default new DeleteTaskController()
