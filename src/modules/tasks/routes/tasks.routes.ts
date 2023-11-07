import { Router } from 'express'

import { listTasksController } from '@app/modules/tasks/controllers/listTasks/ListTasksController'
import { showTaskController } from '@app/modules/tasks/controllers/showTask/showTaskController'
import { createTaskController } from '@app/modules/tasks/controllers/createTask/createTaskController'
import { updatedTaskController } from '@app/modules/tasks/controllers/updateTask/updatedTaskController'
import { deleteTaskController } from '@app/modules/tasks/controllers/deleteTask/deleteTaskController'
import { toggleTaskStatusController } from '../controllers/toggleTaskStatus/toggleTaskStatusController'

const taskRoutes = Router()

taskRoutes.get('/', listTasksController)
taskRoutes.get('/:id', showTaskController)
taskRoutes.post('/', createTaskController)
taskRoutes.put("/:id", updatedTaskController)
taskRoutes.put("/:id/toggle-status", toggleTaskStatusController)
taskRoutes.delete("/:id", deleteTaskController)

export { taskRoutes }
