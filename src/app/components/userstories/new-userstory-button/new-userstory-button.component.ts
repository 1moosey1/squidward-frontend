import { Component, OnInit } from '@angular/core';
import { UserstoryService } from '../../../services/userstory-service/userstory.service';

@Component({
  selector: 'app-new-userstory-button',
  templateUrl: './new-userstory-button.component.html',
  styleUrls: ['./new-userstory-button.component.css']
})
export class NewUserstoryButtonComponent implements OnInit {
  // things need to create userstory
  private sprint;
  private userstory;
  private difficulty;


  constructor(private userstoryService: UserstoryService) { }

  ngOnInit() {
    this.userstoryService.newUserstories(this.sprint, this.userstory, this.difficulty).subscribe(res => {
      console.log(res);
    });
  }

}
