import { PrismaTaskRepository } from "@repositories/tasks/prisma/PrismaTaskRepository";
import { ShowTaskController } from "./ShowController";
import { ShowTaskService } from "./ShowTaskService";

export const ShowTaskFactory = () => {
  const tasksRepository = new PrismaTaskRepository();
  const showTask = new ShowTaskService(tasksRepository);
  const showTaskController = new ShowTaskController(showTask);

  return showTaskController;
}
