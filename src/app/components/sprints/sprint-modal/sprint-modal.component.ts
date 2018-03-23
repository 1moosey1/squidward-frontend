import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sprint-modal',
  templateUrl: './sprint-modal.component.html',
  styleUrls: ['./sprint-modal.component.css']
})
export class SprintModalComponent implements OnInit {

  public sprint_num;
  public release;
  
  @Output()
  public submitEvent = new EventEmitter<any>();
  
  constructor() { }
  ngOnInit() {
  }

  onSubmit(): void {
    this.submitEvent.emit({sprint_num: this.sprint_num, release: this.release});
    this.sprint_num = '';
    this.release = '';
  }

}
