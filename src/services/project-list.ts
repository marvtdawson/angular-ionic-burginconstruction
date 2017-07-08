import { Project } from "../models/projects";

export class ProjectListService{

  private projects: Project[] = [];

  addProject(project_name: string, project_room: string){
    this.projects.push(new Project(project_name, project_room));
  }

  addProjects(project_items: Project[]){
    this.projects.push(...project_items);
  }

  getProjects(){
    return this.projects.slice();
  }

  removeProjects(index: number){
    return this.projects.slice(index, 1);
  }

}
