import { Tasks } from '@prisma/client';

import { prisma } from '@app/prisma/client';
import { TaskRepository } from '@repositories/tasks/TaskRepository'

class PrismaTaskRepository implements TaskRepository {
  async findTasks(): Promise<Tasks[]> {
    try {
      return await prisma.tasks.findMany()
    } catch (error) {
      throw error
    }
  }

  async findTaskById(id: string): Promise<Tasks | null> {
    try {
      return await prisma.tasks.findFirst({
        where: {
          id,
        }
      })
    } catch (error) {
      throw error
    }
  }

  async createTask(title: string): Promise<Tasks> {
    try {
      const task = await prisma.tasks.create({
        data: {
          title,
        }
      })

      return task;
    } catch (error) {
      throw error;
    }
  }

  async updateTask(id: string, title: string): Promise<Tasks> {
    try {
      const updatedTask = await prisma.tasks.update({
        where: { id },
        data: {
          title,
          updated_at: new Date(),
        }
      })

      return updatedTask
    } catch (error) {
      throw error
    }
  }

  async deleteTask(id: string): Promise<void> {
    try {
      await prisma.tasks.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  };

  async toggleTaskStatus(id: string): Promise<Tasks> {
    try {
      const task = await prisma.tasks.findFirst({
        where: { id }
      })

      if (!task) {
        throw new Error("Task not found")
      }

      const updatedStatus = task.status === 'pending' ? 'completed' : 'pending';

      const updatedTask = await prisma.tasks.update({
        where: { id },
        data: {
          status: updatedStatus,
        }
      })

      return updatedTask
    } catch (error) {
      throw error
    }
  }
}

export { PrismaTaskRepository }
