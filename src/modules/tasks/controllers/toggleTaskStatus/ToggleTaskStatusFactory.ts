import { PrismaTaskRepository } from "@repositories/tasks/prisma/PrismaTaskRepository";
import { ToggleTaskStatusController } from "./ToggleTaskStatusController";
import { ToggleTaskStatusService } from "./ToggleTaskStatusService";

export const ToggleTaskStatusFactory = () => {
  const tasksRepository = new PrismaTaskRepository();
  const toggleTaskStatus = new ToggleTaskStatusService(tasksRepository);
  const createTaskController = new ToggleTaskStatusController(toggleTaskStatus);

  return createTaskController;
}
