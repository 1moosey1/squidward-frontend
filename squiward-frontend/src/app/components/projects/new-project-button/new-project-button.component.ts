import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../services/project-service/projects.service';

@Component({
  selector: 'app-new-project-button',
  templateUrl: './new-project-button.component.html',
  styleUrls: ['./new-project-button.component.css']
})
export class NewProjectButtonComponent implements OnInit {
  //variables from html (ngModel)
  private project_name;
  private start_date;
  private end_date;

  constructor(public projectService: ProjectsService) { }

  ngOnInit() {
    //TODO: need the user information. get it from the cookie that you receieve from the backend
  }

  createProject(e) {
    e.preventDefault();
    
    //TODO: instead 1 need to pass in the ownerid (need login done)
    this.projectService.createNewProject(this.project_name, this.start_date, this.start_date,"1").subscribe(res => {
      console.log(res);
    })
  }

}
