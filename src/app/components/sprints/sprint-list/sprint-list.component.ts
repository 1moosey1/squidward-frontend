import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../services/project-service/project.service';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css']
})
export class SprintListComponent implements OnInit {
  private projectID;
  private sprints;

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectID = this.projectService.getProjectID;
  }

  getListOfProjects() {
    
  }

}
