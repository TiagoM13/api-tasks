import { PrismaTaskRepository } from "repositories/tasks/prisma/PrismaTaskRepository";
import { DeleteTaskService } from "./DeleteTaskService";
import { DeleteTaskController } from "./DeleteTaskController";

export const DeleteTaskFactory = () => {
  const tasksRepository = new PrismaTaskRepository();
  const deleteTask = new DeleteTaskService(tasksRepository);
  const deleteTaskController = new DeleteTaskController(deleteTask);

  return deleteTaskController;
}
