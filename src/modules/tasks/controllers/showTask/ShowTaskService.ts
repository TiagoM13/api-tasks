import { AppError } from "@app/errors/AppError";
import { TaskRepository } from "@repositories/tasks/TaskRepository";

class ShowTaskService {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute(id: string) {
    const task = await this.taskRepository.findTaskById(id);

    if (!task) {
      throw new AppError('Task not found.', 404)
    }

    return task
  }
}

export { ShowTaskService }
