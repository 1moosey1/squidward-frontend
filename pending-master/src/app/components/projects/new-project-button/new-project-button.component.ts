import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from '../../../services/project-service/project.service';

@Component({
  selector: 'app-new-project-button',
  templateUrl: './new-project-button.component.html',
  styleUrls: ['./new-project-button.component.css']
})
export class NewProjectButtonComponent implements OnInit {
  //variables from html (ngModel)
  private project_name;

  constructor(public projectService: ProjectsService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  createProject(e) {
    e.preventDefault();
    this.projectService.createNewProject(this.project_name).subscribe(res => {
      console.log(res);
    })
    
    // Clear the modal's project name input field
    this.project_name = '';
  }

  openModal(content): void {
    this.modalService.open(content).result.then((result) => {});
  }

}