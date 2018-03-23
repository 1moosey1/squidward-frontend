import {Component, Input, OnInit} from '@angular/core';
import { SprintService } from '../../../services/sprint-service/sprint-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input()
  public projects;
  private projectKey = 'projectInfo';
  constructor(private sprintService: SprintService, private router: Router) {}

  ngOnInit() {}

  openProject(projectid) {
    this.router.navigate(['/sprints', projectid]);
  }
}
