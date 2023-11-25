import { Tasks } from "@prisma/client";

interface TaskRepository {
  findTasks(): Promise<Tasks[]>;
  findTaskById(id: string): Promise<Tasks | null>;
  createTask(title: string): Promise<Tasks>;
  updateTask(id: string, title: string): Promise<Tasks>;
  deleteTask(id: string): Promise<void>;
  toggleTaskStatus(id: string): Promise<Tasks>;
}

export { TaskRepository };
