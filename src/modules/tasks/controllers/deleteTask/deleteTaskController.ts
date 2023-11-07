import { Request, Response } from "express"

import { paramsSchema } from "@app/modules/tasks/schemas/task.schema"
import { deleteTask, findTaskById } from "@app/modules/tasks/models/task.model"

const deleteTaskController = async (req: Request, res: Response) => {
  try {
    const { id } = paramsSchema.parse(req.params)

    const task = findTaskById(id)

    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }

    await deleteTask(id)

    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting task' });
  }
}

export { deleteTaskController }
