import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {

  public projectname: string;

  @Output()
  public submitEvent = new EventEmitter<string>();

  constructor() {}
  ngOnInit() {}

  onSubmit(): void {
    this.submitEvent.emit(this.projectname);
    this.projectname = '';
  }
}
