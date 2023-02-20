import { TaskRepository } from '../TaskRepository';
import { Task } from '../domain';

export class TaskApplication {
  private taskRepository: TaskRepository | undefined;
  createTask(name: string, dueDate: Date) {
    const task = new Task(name, dueDate);
    this.taskRepository?.save(task);
  }

  postponeTask(taskId: number) {
    const task = this.taskRepository?.findById(taskId);
    task?.postpone();
    this.taskRepository?.save(task!);
  }
}
