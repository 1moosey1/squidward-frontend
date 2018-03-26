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
  public userstoryStatus;

  private sprint;
  private project;
  
  constructor(private userstoryService: UserstoryService, private router: Router, private route: ActivatedRoute,
     private projectService: ProjectService, private sprintService: SprintService ) { }

  ngOnInit() {
    this.sprintid = this.route.snapshot.paramMap.get('sprintid');
    this.sprint = this.sprintService.getSprint();
    this.project = this.projectService.getProject();
    this.loadUserstories(true);
  }

  loadUserstories(refresh: boolean): void {
    this.userstoryService.getUserstories(this.sprintid, refresh).subscribe(
      (res: Userstory[]) => {
        this.userstories = res;
        // console.log(this.sprints);
      },
      () => {
        this.displayMessage = true;
        this.alertMessage = 'Error: Could not load user stories';
      }
    );
  }

  onNewUserstories(event): void {
    const project = this.projectService.getProject();
    const story = 'As a ' + event.asA + ' I want ' + event.iWant + ' so that ' + event.soThat;    this.userstoryService.newUserstories(this.sprintService.getSprint(), story, event.points)
    this.userstoryService.newUserstories(this.sprintService.getSprint(), story, event.points)
      .subscribe(
        (res) => {
          this.displayMessage = true;
          this.alertMessage = 'user story added successfully';
          console.log(res);
          this.loadUserstories(true);
        },
        () => {
          this.displayMessage = true;
          this.alertMessage = 'user story was unsucessfully created';
          console.log('error');
        }
      
      );
  }

  back() {
    this.router.navigate(['/sprints', this.project.id]);
  }

}
