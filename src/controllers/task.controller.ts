import { Request, Response } from 'express';

import { Task } from '@app/model/task'
import { paramsSchema, schemaBody } from '@app/schemas';

const getAllTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await Task.findMany()

    return res.json(tasks)
  } catch (error) {
    return res.status(404).json({ message: "Error listing tasks" })
  }
}

const getTask = async (req: Request, res: Response) => {
  try {
    const { id } = paramsSchema.parse(req.params)

    const task = await Task.findFirst({
      where: {
        id,
      }
    })

    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }

    return res.status(200).json(task)
  } catch (error) {
    return res.status(500).json({ message: 'Error when searching for task' });
  }
}

const createTask = async (req: Request, res: Response) => {
  try {
    const { title } = schemaBody.parse(req.body)

    if (title.trim() === '') {
      return res.status(400).json({ message: 'The “title” field is mandatory.' });
    }

    if (title.length < 2) {
      return res.status(404).json({ message: 'The "title" field must contain at least 2 characters.' })
    }

    const task = await Task.create({
      data: {
        title,
      }
    })

    return res.status(201).json(task)
  } catch (error) {
    return res.status(500).json({ message: 'Error creating task' });
  }
}

const updatedTask = async (req: Request, res: Response) => {
  try {
    const { id } = paramsSchema.parse(req.params)
    const { title } = schemaBody.parse(req.body)

    if (title.trim() === '') {
      return res.status(400).json({ message: 'The “title” field is mandatory.' });
    }

    if (title.length < 2) {
      return res.status(404).json({ message: 'The "title" field must contain at least 2 characters.' })
    }

    let task = await Task.findFirstOrThrow({
      where: {
        id
      }
    })

    task = await Task.update({
      where: {
        id,
      },
      data: {
        title,
        updated_at: new Date(),
      }
    })

    return res.status(201).json(task)
  } catch (error) {
    return res.status(500).json({ message: 'Error updating task' });
  }
}

const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = paramsSchema.parse(req.params)

    const task = await Task.findFirst({
      where: {
        id,
      }
    })

    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }

    await Task.delete({
      where: {
        id,
      }
    })

    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting task' });
  }
}

export {
  getAllTasks,
  getTask,
  createTask,
  updatedTask,
  deleteTask
}
