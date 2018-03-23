import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {

  public projectname: string;

  @Input()
  private onNewProject;

  constructor() {}
  ngOnInit() {}

  onCreate(): void {
    this.onNewProject(this.projectname);
  }
}
