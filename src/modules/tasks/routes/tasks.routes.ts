import { Router } from 'express'

import listTasksController from '../controllers/listTasks/listTasksController'
import showTaskController from '../controllers/showTask/showTaskController'
import createTaskController from '../controllers/createTask/createTaskController'
import updatedTaskController from '../controllers/updateTask/updatedTaskController'
import toggleTaskStatusController from '../controllers/toggleTaskStatus/toggleTaskStatusController'
import deleteTaskController from '../controllers/deleteTask/deleteTaskController'

const taskRoutes = Router()

taskRoutes.get('/', listTasksController.listTasks)
taskRoutes.get('/:id', showTaskController.showTask)
taskRoutes.post('/', createTaskController.createTask)
taskRoutes.put("/:id", updatedTaskController.updateTask)
taskRoutes.put("/:id/toggle-status", toggleTaskStatusController.toggleTaskStatus)
taskRoutes.delete("/:id", deleteTaskController.deleteTask)

export { taskRoutes }
