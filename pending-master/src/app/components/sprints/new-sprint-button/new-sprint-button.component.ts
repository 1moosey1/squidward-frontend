import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SprintService } from '../../../services/sprintService/sprint-service.service';
import { ProjectsService } from '../../../services/project-service/project.service';

@Component({
  selector: 'app-new-sprint-button',
  templateUrl: './new-sprint-button.component.html',
  styleUrls: ['./new-sprint-button.component.css']
})
export class NewSprintButtonComponent implements OnInit {
  private sprintInfo;

  //variables for sprint document
  private sprint_num;
  private project;
  private release;

  constructor(private sprintService: SprintService, private projectService: ProjectsService, private modalService: NgbModal) { }

  ngOnInit() {
    this.project = this.projectService.getProject();
  }

  createNewSprint(){
    this.sprintService.addNewSprint(this.sprint_num, this.project, this.release).subscribe(res => {
      console.log(res);
    });

    // Clear the modal's sprint number and release input fields
    this.sprint_num = '';
    this.release = '';
  }

  openModal(content): void {
    this.modalService.open(content).result.then((result) => {});
  }

}
