import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sprint-modal',
  templateUrl: './sprint-modal.component.html',
  styleUrls: ['./sprint-modal.component.css']
})
export class SprintModalComponent implements OnInit {

  public release;
  
  @Output()
  public submitEvent = new EventEmitter<any>();
  
  constructor() { }
  ngOnInit() {
  }

  onSubmit(): void {
    this.submitEvent.emit({release: this.release});
    this.release = '';
  }

}
