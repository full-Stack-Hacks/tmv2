import { v4 as uuidv4 } from "uuid";

class Task {
  constructor(body) {
    this.body = body;
    this.id = uuidv4();
  }
}

export default Task;
