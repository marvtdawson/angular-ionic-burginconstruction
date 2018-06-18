import { Projects } from "../providers/projects-list/projects";

export class ProjectsListService{

  private projects: Projects[] = [];

  addProject(projectname: string, project_room: string){
    this.projects.push(new Projects(projectname, project_room));
  }

  addProjects(project_names: Projects[]){
    this.projects.push(...project_names);
  }

  getProjects(){
    return this.projects.slice();
  }

  removeProjects(index: number){
    return this.projects.slice(index, 1);
  }

}
