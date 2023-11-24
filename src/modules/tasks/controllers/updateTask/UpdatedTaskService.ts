import { TaskRepository } from "@repositories/tasks/TaskRepository";

class UpdatedTaskService {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute(id: string, title: string) {
    let task = await this.taskRepository.findTaskById(id)

    if (!task) {
      throw new Error('Task not found.')
    }

    if (title.trim() === '') {
      throw new Error('The “title” field is mandatory.');
    }

    if (title.length < 2) {
      throw new Error('The "title" field must contain at least 2 characters.')
    }

    task = await this.taskRepository.updateTask(id, title)

    return task
  }
}

export { UpdatedTaskService }