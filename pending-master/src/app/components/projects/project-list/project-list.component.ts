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
  private projects;

  // inject project service
  constructor(public projectService: ProjectsService, private router: Router) {}
  ngOnInit() {
    // retrieve and store projects
    this.projectService.getOwnedProjects().toPromise()
      .then(projects => {
        console.log(projects);
      });
  }

  setProjectID(id, name, owner, users) {
    // set the projectID so we can use it later
    this.projectService.setProject(id, name, owner, users);
    this.router.navigate(['/sprints']);
  }
}
