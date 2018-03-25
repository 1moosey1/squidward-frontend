import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../services/project-service/project.service';
import Project from '../../../utility/Project';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  public ownedProjects: Project[];
  public displayMessage = false;
  public alertMessage: string;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadOwnedProjects(false);
  }

  // Retrieve owned projects
  loadOwnedProjects(refresh: boolean): void {
    this.projectService.getOwnedProjects(refresh)
      .subscribe(
        (projects: Project[]) => {
          this.ownedProjects = projects;
        },
        () => {

          this.displayMessage = true;
          this.alertMessage = 'Error: Could not load projects';
        });
  }

  onNewProject(projectname: string): void {

    this.projectService.createNewProject(projectname)
      .subscribe(
        () => {
          console.log('works');

          this.displayMessage = true;
          this.alertMessage = 'Project Hook Created';
          this.loadOwnedProjects(true);
        },
        () => {

          this.displayMessage = true;
          this.alertMessage = 'Error: Could not create project hook';
        });
  }
}
