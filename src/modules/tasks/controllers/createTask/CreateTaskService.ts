import { AppError } from "@app/errors/AppError";
import { TaskRepository } from "@repositories/tasks/TaskRepository";

class CreateTaskService {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute(title: string) {
    if (title.trim() === '') {
      throw new AppError('The “title” field is mandatory.');
    }

    if (title.length < 2) {
      throw new AppError('The "title" field must contain at least 2 characters.');
    }

    const task = await this.taskRepository.createTask(title)

    return task;
  }
}

export { CreateTaskService }
