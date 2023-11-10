import { TaskRepository } from "@repositories/tasks/TaskRepository";

class ListTasksService {
  constructor(private taskRepository: TaskRepository) { }

  async execute() {
    const tasks = await this.taskRepository.findTasks()

    return tasks
  }
}

export { ListTasksService }
