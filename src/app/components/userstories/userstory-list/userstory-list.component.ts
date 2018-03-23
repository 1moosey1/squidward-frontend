import { Component, OnInit } from '@angular/core';
import { UserstoryService, Userstory } from '../../../services/userstory-service/userstory.service';
import { SprintService } from '../../../services/sprint-service/sprint-service.service';

@Component({
  selector: 'app-userstory-list',
  templateUrl: './userstory-list.component.html',
  styleUrls: ['./userstory-list.component.css']
})
export class UserstoryListComponent implements OnInit {
  private userstory;
  private sprintID;

  constructor(private userstoryService: UserstoryService, private sprintService: SprintService) { }

  ngOnInit() {
    this.sprintID = this.sprintService.getSprint().id;
    this.userstory = this.userstoryService.getUserstories(this.sprintID).subscribe(res => {
      console.log(res);
    });
  }

}
