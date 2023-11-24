import { TaskRepository } from "@repositories/tasks/TaskRepository";

class ShowTaskService {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute(id: string) {
    const task = await this.taskRepository.findTaskById(id);

    if (!task) {
      throw new Error('Task not found')
    }

    return task
  }
}

export { ShowTaskService }
