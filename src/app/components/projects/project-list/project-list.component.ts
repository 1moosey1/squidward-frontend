import { Component, OnInit } from '@angular/core';
import { ProjectsService, project } from '../../../services/project-service/project.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  //creating variable so that i can store list of projects in here.
  private projects;

  //inject project service
  constructor(public projectService: ProjectsService, private router: Router) { }

  ngOnInit() {
    //get the list of projects from the service and store it into projects variable.
    this.projectService.getOwnedProjects().subscribe(projects => {
      this.projects = projects;
      console.log(projects)
    })
  }

  setProjectID(id,name, owner, users) {
    //set the projectID so we can use it later!
    this.projectService.setProject(id, name, owner, users);
    this.router.navigate(['/sprints'])
  }

  

}