import { Component, OnInit } from '@angular/core';
import { UserstoryService } from '../../../services/userstory-service/userstory.service';
import { SprintService } from '../../../services/sprint-service/sprint-service.service';

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


  constructor(private userstoryService: UserstoryService, private sprintService: SprintService) { }

  ngOnInit() {
    this.sprint = this.sprintService.getSprint;
  }

  createUserstory(e) {
    e.preventDefault();

    this.userstoryService.newUserstories(this.sprint, this.userstory, this.difficulty).subscribe(res => {
      console.log(res);
    });
  }

}
