import express from 'express';

import {
  getAllTasks,
  getTask,
  createTask,
  updatedTask,
  deleteTask
} from '../controllers/task.controller';

const router = express.Router();

router.get('/tasks', getAllTasks)
router.get('/tasks/:id', getTask)
router.post('/tasks', createTask)
router.put("/tasks/:id", updatedTask)
router.delete("/tasks/:id", deleteTask)

export { router }
