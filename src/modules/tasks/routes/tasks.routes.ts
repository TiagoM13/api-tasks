import { Router } from 'express'

import { CreateTaskFactory } from '../controllers/createTask/CreateTaskFactory'
import { DeleteTaskFactory } from '../controllers/deleteTask/DeleteTaskFactory'
import { ListTasksFactory } from '../controllers/listTasks/ListTasksFactory'
import { ShowTaskFactory } from '../controllers/showTask/ShowTaskFactory'
import { UpdatedTaskFactory } from '../controllers/updateTask/UpdatedTaskFactory'
import { ToggleTaskStatusFactory } from '../controllers/toggleTaskStatus/ToggleTaskStatusFactory'

const taskRoutes = Router()

taskRoutes.get('/', (req, res) => ListTasksFactory().handle(req, res))
taskRoutes.get('/:id', (req, res) => ShowTaskFactory().handle(req, res))
taskRoutes.post('/', (req, res) => CreateTaskFactory().handle(req, res))
taskRoutes.put("/:id", (req, res) => UpdatedTaskFactory().handle(req, res))
taskRoutes.put("/:id/toggle-status", (req, res) => ToggleTaskStatusFactory().handle(req, res))
taskRoutes.delete("/:id", (req, res) => DeleteTaskFactory().handle(req, res))

export { taskRoutes }
