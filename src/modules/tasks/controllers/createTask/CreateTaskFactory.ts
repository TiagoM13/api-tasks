import { PrismaTaskRepository } from "@repositories/tasks/prisma/PrismaTaskRepository";
import { CreateTaskService } from "./CreateTaskService"
import { CreateTaskController } from "./CreateTaskController"

export const CreateTaskFactory = () => {
  const tasksRepository = new PrismaTaskRepository();
  const createTask = new CreateTaskService(tasksRepository);
  const createTaskController = new CreateTaskController(createTask);

  return createTaskController;
}