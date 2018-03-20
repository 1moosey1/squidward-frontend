import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../services/project-service/project.service';

@Component({
  selector: 'app-new-project-button',
  templateUrl: './new-project-button.component.html',
  styleUrls: ['./new-project-button.component.css']
})
export class NewProjectButtonComponent implements OnInit {
  //variables from html (ngModel)
  private project_name;

  constructor(public projectService: ProjectsService) { }

  ngOnInit() {
  }

  createProject(e) {
    e.preventDefault();
    this.projectService.createNewProject(this.project_name).subscribe(res => {
      console.log(res);
    })
  }

}