import { Task } from './domain';

export interface TaskRepository {
  save(task: Task): void;
  findById(taskId: number): Task;
  getPostponeCount(taskId: number): number;
}
