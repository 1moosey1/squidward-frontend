import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project-service/project.service';
import { SprintService } from '../../../services/sprint-service/sprint-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css']
})
export class SprintListComponent implements OnInit {
  private project;
  private sprints;

  constructor(private projectService: ProjectService, private sprintService: SprintService, private router:Router) { }

  ngOnInit() {
    this.project = this.projectService.getProject();

    this.sprintService.getSprints(this.project.id).subscribe(res=> {
      this.sprints = res;
    });
  }

  setSprint(id, number, project, release) {
    this.sprintService.setSprint(id, number, project, release);
    this.router.navigate(['/userstories'])
  }

}
