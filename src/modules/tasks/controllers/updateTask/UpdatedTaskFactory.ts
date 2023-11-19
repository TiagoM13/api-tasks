import { PrismaTaskRepository } from "@repositories/tasks/prisma/PrismaTaskRepository"
import { UpdatedTaskService } from "./UpdatedTaskService"
import { UpdatedTaskController } from "./UpdatedController"

const UpdatedTaskFactory = () => {
  const taskRepository = new PrismaTaskRepository()
  const updatedTask = new UpdatedTaskService(taskRepository)
  const updatedTaskController = new UpdatedTaskController(updatedTask)

  return updatedTaskController
}

export { UpdatedTaskFactory }
