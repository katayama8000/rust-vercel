export class Task {
  private id: number;
  private name: string;
  private dueDate: Date;
  private taskStatus: boolean;
  private postponeCount: number;
  constructor(name: string, dueDate: Date) {
    if (name === null || name === undefined) {
      throw new Error('You have to configure name and dueDate');
    }
    this.id = Math.floor(Math.random() * 1000);
    this.name = name;
    this.dueDate = dueDate;
    this.taskStatus = false;
    this.postponeCount = 0;
  }

  postpone(): void {
    if (this.postponeCount >= 3) {
      throw new Error('You can not postpone task anymore');
    }
    this.dueDate.setDate(this.dueDate.getDate() + 1);
    this.postponeCount += 1;
  }
}
