import { Request, Response } from "express";

import { schemaBody } from "@app/modules/tasks/schemas/task.schema";
import { createTask } from "@app/modules/tasks/models/task.model";

const createTaskController = async (req: Request, res: Response) => {
  try {
    const { title } = schemaBody.parse(req.body)

    if (title.trim() === '') {
      return res.status(400).json({ message: 'The “title” field is mandatory.' });
    }

    if (title.length < 2) {
      return res.status(404).json({ message: 'The "title" field must contain at least 2 characters.' })
    }

    const task = await createTask(title)

    return res.status(201).json(task)
  } catch (error) {
    return res.status(500).json({ message: 'Error creating task' });
  }
}

export { createTaskController }