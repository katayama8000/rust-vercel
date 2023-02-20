export class Task {
  private id: number | undefined;
  private name: string | undefined;
  private dueDate: Date | undefined;
  private taskStatus: boolean | undefined;
  private postponeCount: number | undefined;

  constructor() {}
  // setter
  setId(id: number) {
    this.id = id;
  }
  setName(name: string) {
    this.name = name;
  }
  setTaskStatus(taskStatus: boolean) {
    this.taskStatus = taskStatus;
  }
  setDueDate(dueDate: Date) {
    this.dueDate = dueDate;
  }
  setPostponeCount(postponeCount: number) {
    this.postponeCount = postponeCount;
  }

  // getter
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getTaskStatus() {
    return this.taskStatus;
  }
  getDueDate() {
    return this.dueDate;
  }
  getPostponeCount() {
    return this.postponeCount;
  }
}
