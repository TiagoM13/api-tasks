import { AppError } from "@app/errors/AppError";
import { TaskRepository } from "@repositories/tasks/TaskRepository";

class ToggleTaskStatusService {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute(id: string) {
    const task = await this.taskRepository.findTaskById(id);

    if (!task) {
      throw new AppError('Task not found', 404);
    }

    const updatedTask = await this.taskRepository.toggleTaskStatus(id);

    return updatedTask
  }
}

export { ToggleTaskStatusService }
