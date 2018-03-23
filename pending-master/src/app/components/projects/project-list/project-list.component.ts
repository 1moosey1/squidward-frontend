import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '../../../services/project-service/project.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  // List of projects
  // private projects;

  // DELETE
  private nR: number = 0;
  private nP: number = 0;

  private numRows: any[] = [];
  private numCols: any[] = [];
  private numProjects: number = 0;

  private curCol: number;

  private curProjectName: string[] = [];
  private projects: Project[] = [
    {id: 1, name: 'Hello World', owner: 'Batman', users: 'Robin'},
    {id: 1, name: 'Hello Earth', owner: 'Batman', users: 'Robin'},
    {id: 1, name: 'Hello Planet', owner: 'Batman', users: 'Robin'},
    {id: 1, name: 'Hello Mars', owner: 'Batman', users: 'Robin'},
    {id: 1, name: 'Hello Jupiter', owner: 'Batman', users: 'Robin'},
    {id: 1, name: 'Hello Saturn', owner: 'Batman', users: 'Robin'},
    {id: 1, name: 'Hello Pluto', owner: 'Batman', users: 'Robin'},
    {id: 1, name: 'Hello Venus', owner: 'Batman', users: 'Robin'},
  ];
  // DELETE

  // inject project service
  constructor(public projectService: ProjectsService, private router: Router) {}
  ngOnInit() {
    // retrieve and store projects
    // this.projectService.getOwnedProjects().toPromise()
    //   .then(projects => {
    //     console.log(projects);
    //   });

    // DELETE
    for (var p = 0; p < this.projects.length; p++) {
      if (this.nP % 3 == 0) {
        this.nR++;
      }
      this.nP++;

      this.curCol = this.projectService.getCurCol();
      this.projectService.updateCurCol();

      this.curProjectName[p] = this.projects[p].name;
    }

    for (var n = 0; n < this.nR; n++) {
      this.numRows[n] = null;
    }

    for (var c = 0; c < 3; c++) {
      this.numCols[c] = null;
    }
    // DELETE
  }

  setProjectID(id, name, owner, users) {
    // set the projectID so we can use it later
    // this.projectService.setProject(id, name, owner, users);
    // this.router.navigate(['/sprints']);
  }

  // DELETE
  updateNumProjects(): void {
    this.numProjects++;
    console.log(this.numProjects);
  }
  // DELETE
}
