import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../services/project-service/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  //creating variable so that i can store list of projects in here.
  private projects;

  //inject project service
  constructor(public projectService: ProjectsService) { }

  ngOnInit() {
    //get the list of projects from the service and store it into projects variable.
    this.projectService.getOwnedProjects().subscribe(projects => {
      this.projects = projects;
    })
  }

  setProjectID(id) {
    //set the projectID so we can use it later!
    console.log(id);
    this.projectService.setProjectID(id);

  }

  

}