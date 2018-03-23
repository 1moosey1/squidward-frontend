import { Component, OnInit } from '@angular/core';
import { SprintService } from '../../../services/sprint-service/sprint-service.service';
import { ProjectService } from '../../../services/project-service/project.service';

@Component({
  selector: 'app-new-sprint-button',
  templateUrl: './new-sprint-button.component.html',
  styleUrls: ['./new-sprint-button.component.css']
})
export class NewSprintButtonComponent implements OnInit {
  private sprintInfo;

  // variables for sprint document
  private sprint_num;
  private project;
  private release;

  constructor(private sprintService: SprintService, private projectService: ProjectService) { }

  ngOnInit() {
    this.project = localStorage.getItem(this.project);
    this.project = JSON.parse(this.project);
  }

  createNewSprint() {
    this.sprintService.addNewSprint(this.sprint_num, this.project, this.release)
      .subscribe(res => {
      console.log(res);
    });
  }

}
