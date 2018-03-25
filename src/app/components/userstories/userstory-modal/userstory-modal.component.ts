import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userstory-modal',
  templateUrl: './userstory-modal.component.html',
  styleUrls: ['./userstory-modal.component.css']
})
export class UserstoryModalComponent implements OnInit {

  public title;
  public asA;
  public iWant;
  public soThat;
  public points;
  
  @Output()
  public submitEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.submitEvent.emit({title: this.title, 
                          asA: this.asA, 
                          iWant: this.iWant, 
                          soThat: this.soThat, 
                          points: this.points});
    
    this.title = '';
    this.asA = '';
    this.iWant = '';
    this.soThat = '';
  }

}
