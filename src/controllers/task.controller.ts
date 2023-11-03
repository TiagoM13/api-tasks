import { Request, Response } from 'express';
import { Task } from '../model/task';

const getAllTasks = async (_req: Request, res: Response) => {
  const tasks = await Task.findMany()

  return res.json(tasks)
}

const getTask = async (req: Request, res: Response) => {
  const { id } = req.params
  const tasks = await Task.findFirstOrThrow({
    where: {
      id,
    }
  })

  return res.status(200).json(tasks)
}

const createTask = async (req: Request, res: Response) => {
  const body = req.body

  const task = await Task.create({
    data: {
      title: body.title,
    }
  })

  return res.status(201).json(task)
}

const updatedTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { title } = req.body

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
    res.status(500).json({ error: 'Error updating task' });
  }
}

const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params

  await Task.delete({
    where: {
      id,
    }
  })

  return res.status(204).json()
}

export {
  getAllTasks,
  getTask,
  createTask,
  updatedTask,
  deleteTask
}
