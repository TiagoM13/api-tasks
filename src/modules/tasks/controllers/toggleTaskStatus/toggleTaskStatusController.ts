import { Request, Response } from "express"

import { paramsSchema } from "@app/modules/tasks/schemas/task.schema"
import { toggleTaskStatus } from "@app/modules/tasks/models/task.model"

const toggleTaskStatusController = async (req: Request, res: Response) => {
  try {
    const { id } = paramsSchema.parse(req.params)

    const updatedTask = await toggleTaskStatus(id)

    return res.status(200).json(updatedTask)
  } catch (error) {
    return res.status(500).json({ message: 'Error toggling task status.' })
  }
}

export { toggleTaskStatusController }
