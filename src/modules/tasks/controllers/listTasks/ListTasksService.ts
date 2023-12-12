import { AppError } from "@app/errors/AppError";
import { TaskRepository } from "@repositories/tasks/TaskRepository";

class ListTasksService {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute() {
    const tasks = await this.taskRepository.findTasks()

    if (!tasks || tasks.length === 0) {
      throw new AppError('No tasks found.', 404)
    }

    return tasks
  }
}

export { ListTasksService }
