
export class Todo {
  public id: string;
  public title: string;
  public description: string;
  public completed: boolean;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(id: string, title: string, description: string, completed: boolean, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}