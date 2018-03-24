import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sprint-modal',
  templateUrl: './sprint-modal.component.html',
  styleUrls: ['./sprint-modal.component.css']
})
export class SprintModalComponent implements OnInit {

  public release;
  public start_date;
  public end_date;

  @Output()
  public submitEvent = new EventEmitter<any>();
  
  constructor() { }
  ngOnInit() {
  }

  onSubmit(): void {
    this.submitEvent.emit({release: this.release, start_date: this.start_date, end_date: this.end_date});
    this.release = '';
  }

}
