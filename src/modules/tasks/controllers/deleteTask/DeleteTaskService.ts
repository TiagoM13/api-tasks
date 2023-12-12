import { AppError } from "@app/errors/AppError";
import { TaskRepository } from "@repositories/tasks/TaskRepository";

class DeleteTaskService {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute(id: string) {
    const task = await this.taskRepository.findTaskById(id);

    if (!task || task.id !== id) {
      throw new AppError('Task not found.', 404)
    }

    await this.taskRepository.deleteTask(id)
  }
}

export { DeleteTaskService }
