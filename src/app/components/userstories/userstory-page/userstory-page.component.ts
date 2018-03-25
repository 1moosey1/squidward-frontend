import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { SprintService } from '../../../services/sprint-service/sprint-service.service';
import { Router, Route, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ProjectService } from '../../../services/project-service/project.service';
import Userstory from '../../../utility/Userstory';
import { UserstoryService } from '../../../services/userstory-service/userstory.service';

@Component({
  selector: 'app-userstory-page',
  templateUrl: './userstory-page.component.html',
  styleUrls: ['./userstory-page.component.css']
})
export class UserstoryPageComponent implements OnInit {

  private sprintid;
  public displayMessage = false;
  public alertMessage: string;
  public userstories;
  
  constructor(private userstoryService: UserstoryService, private router: Router, private route: ActivatedRoute,
     private projectService: ProjectService ) { }

  ngOnInit() {
    this.sprintid = this.route.snapshot.paramMap.get('sprintid');
    //this.loadSprints(true);
  }

  // loadSprints(refresh: boolean): void {
  //   this.sprintService.getSprints(this.sprintid, refresh).subscribe(
  //     (res: Userstory[]) => {
  //       this.userstories = res;
  //       // console.log(this.sprints);
  //     },
  //     () => {
  //       this.displayMessage = true;
  //       this.alertMessage = 'Error: Could not load user stories';
  //     }
  //   );
  // }

  onNewUserstories(event): void {
    const project = this.projectService.getProject();
    const story = event.asA + event.iWant + event.soThat;
    this.userstoryService.newUserstories(this.sprintid, story, event.difficulty)
      .subscribe(
        () => {
          this.displayMessage = true;
          this.alertMessage = 'user story added successfully';
          //this.loadSprints(true);
        },
        () => {
          this.displayMessage = true;
          this.alertMessage = 'user story was unsucessfully created';
        }
      
      );
  }

}
