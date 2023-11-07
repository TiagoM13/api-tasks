import { prisma } from "@app/app/prisma/client";

const findTasks = async () => {
  try {
    return await prisma.tasks.findMany()
  } catch (error) {
    throw error
  }
}

const findTaskById = async (id: string) => {
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

const createTask = async (title: string) => {
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

const updateTask = async (id: string, title: string) => {
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

const deleteTask = async (id: string) => {
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

const toggleTaskStatus = async (id: string) => {
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

export {
  findTasks,
  findTaskById,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskStatus
}
