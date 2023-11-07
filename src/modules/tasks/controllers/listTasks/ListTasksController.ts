import { Request, Response } from "express"

import { findTasks } from "@app/modules/tasks/models/task.model"


const listTasksController = async (_req: Request, res: Response) => {
  try {
    const tasks = await findTasks()

    return res.json(tasks)
  } catch (error) {
    return res.status(404).json({ message: "Error listing tasks" })
  }
}

export { listTasksController }
