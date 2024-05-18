import { v4 as uuidv4 } from "uuid";

class Project {
  constructor(
    title = "Untitled project",
    startDate = "2024-05-15",
    endDate = "2024-05-20",
    blurb = "blurbless"
  ) {
    this.tasks = [];
    this.title = title;
    this.startDate = startDate;
    this.id = uuidv4();
    this.endDate = endDate;
    this.blurb = blurb;
  }
}

export default Project;
