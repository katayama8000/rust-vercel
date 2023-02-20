class Task {
  private id: number;
  private name: string;
  private dueDate: Date;
  private taskStatus: boolean;
  private postponeCount: number;

  constructor(
    id: number,
    name: string,
    dueDate: Date,
    taskStatus: boolean,
    postponeCount: number
  ) {
    this.id = id;
    this.name = name;
    this.dueDate = dueDate;
    this.taskStatus = taskStatus;
    this.postponeCount = postponeCount;
  }
}
