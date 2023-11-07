import { Request, Response } from "express"

import { paramsSchema } from "@app/modules/tasks/schemas/task.schema"
import { findTaskById } from "@app/modules/tasks/models/task.model"

const showTaskController = async (req: Request, res: Response) => {
  try {
    const { id } = paramsSchema.parse(req.params)

    const task = await findTaskById(id)

    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }

    return res.status(200).json(task)
  } catch (error) {
    return res.status(500).json({ message: 'Error when searching for task' });
  }
}

export { showTaskController }
