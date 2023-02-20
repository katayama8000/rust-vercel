import { Task } from '../domain/index';
import { TaskRepository } from '../TaskRepository';

const POSTPONE_COUNT_LIMIT = 3;
export class TaskApplicationService {
  private taskRepository!: TaskRepository;
  createTask(name: string, dueDate: Date) {
    if (name === null || name === undefined) {
      throw new Error('You have to configure name and dueDate');
    }
    const task = new Task();
    task.setName(name);
    task.setDueDate(dueDate);
    task.setTaskStatus(false);
    task.setPostponeCount(0);
    this.taskRepository.save(task);
  }

  postponeTask(taskId: number) {
    const task = this.taskRepository.findById(taskId);
    if (task.getPostponeCount()! >= POSTPONE_COUNT_LIMIT) {
      throw new Error('You can not postpone task anymore');
    }
    task.setPostponeCount(task.getPostponeCount()! + 1);
    this.taskRepository.save(task);
  }
}
