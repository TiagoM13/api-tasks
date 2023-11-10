import { PrismaTaskRepository } from "@repositories/tasks/prisma/PrismaTaskRepository";
import { ListTasksController } from "./ListTasksController";
import { ListTasksService } from "./ListTasksService";

export const ListTasksFactory = () => {
  const tasksRepository = new PrismaTaskRepository();
  const listTasks = new ListTasksService(tasksRepository);
  const listTasksController = new ListTasksController(listTasks);

  return listTasksController;
}
