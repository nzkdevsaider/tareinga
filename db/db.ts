// db.ts
import Dexie, { Table } from "dexie";
import { ITask } from "@/types";

export class Database extends Dexie {
  tasks!: Table<ITask>;

  constructor() {
    super("tareinga");
    this.version(1).stores({
      tasks: "id, title, description, created_at, updated_at, state",
    });
  }
}

export const db = new Database();
