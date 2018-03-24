import {Component, Input, OnInit} from '@angular/core';
import { SprintService } from '../../../services/sprint-service/sprint-service.service';
import { Router } from '@angular/router';
import { ProjectService } from '../../../services/project-service/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input()
  public projects;
  private projectKey = 'projectInfo';
  constructor(private sprintService: SprintService, private router: Router, private projectService: ProjectService) {}

  ngOnInit() {}

  openProject(project) {
    this.projectService.setProject(project);
    this.router.navigate(['/sprints', project.id]);
  }
}
