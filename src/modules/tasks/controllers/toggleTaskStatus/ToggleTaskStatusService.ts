import { TaskRepository } from "@repositories/tasks/TaskRepository";

class ToggleTaskStatusService {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute(id: string) {
    const task = await this.taskRepository.toggleTaskStatus(id);

    return task
  }
}

export { ToggleTaskStatusService }
