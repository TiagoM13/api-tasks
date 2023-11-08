import { Request, Response } from "express"

import { paramsSchema } from "@app/modules/tasks/schemas/task.schema"
import TaskModel from "@app/modules/tasks/models/task.model"

class ToggleTaskStatusController {
  async toggleTaskStatus(req: Request, res: Response) {
    try {
      const { id } = paramsSchema.parse(req.params)

      const updatedTask = await TaskModel.toggleTaskStatus(id)

      return res.status(200).json(updatedTask)
    } catch (error) {
      return res.status(500).json({ message: 'Error toggling task status.' })
    }
  }
}

export default new ToggleTaskStatusController()
