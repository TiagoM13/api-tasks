import { StatusTask } from "@app/enum/task";
import { AppError } from "@app/errors/AppError";
import { TaskRepository } from "@repositories/tasks/TaskRepository";

class UpdatedTaskService {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute(id: string, title: string) {
    let task = await this.taskRepository.findTaskById(id)

    if (!task) {
      throw new AppError('Task not found.', 404)
    }

    if (title.trim() === '') {
      throw new AppError('The “title” field is mandatory.');
    }

    if (title.length < 2) {
      throw new AppError('The "title" field must contain at least 2 characters.')
    }

    if (task.status === StatusTask.COMPLETED) {
      throw new AppError('Unable to update a completed task.', 400);
    }

    task = await this.taskRepository.updateTask(id, title)

    return task
  }
}

export { UpdatedTaskService }
