import { Router } from 'express'

import ListTasksController from '@app/modules/tasks/controllers/listTasks/listTasksController'
import ShowTaskController from '@app/modules/tasks/controllers/showTask/showTaskController'
import createTaskController from '@app/modules/tasks/controllers/createTask/createTaskController'
import UpdatedTaskController from '@app/modules/tasks/controllers/updateTask/updatedTaskController'
import DeleteTaskController from '@app/modules/tasks/controllers/deleteTask/deleteTaskController'
import ToggleTaskStatusController from '../controllers/toggleTaskStatus/toggleTaskStatusController'

const taskRoutes = Router()

taskRoutes.get('/', ListTasksController.listTasks)
taskRoutes.get('/:id', ShowTaskController.showTask)
taskRoutes.post('/', createTaskController.createTask)
taskRoutes.put("/:id", UpdatedTaskController.updateTask)
taskRoutes.put("/:id/toggle-status", ToggleTaskStatusController.toggleTaskStatus)
taskRoutes.delete("/:id", DeleteTaskController.deleteTask)

export { taskRoutes }
