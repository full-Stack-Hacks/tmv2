import { v4 as uuidv4 } from "uuid";

class Project {
  constructor(title, startDate, endDate, blurb) {
    this.tasks = [];
    this.title = title;
    this.startDate = startDate;
    this.id = uuidv4();
    this.endDate = endDate;
    this.blurb = blurb;
  }
}

export default Project;
