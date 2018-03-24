import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { SprintService } from '../../../services/sprint-service/sprint-service.service';
import { Router, Route, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ProjectService } from '../../../services/project-service/project.service';
import Sprint from '../../../utility/Sprint';

@Component({
  selector: 'app-sprint-page',
  templateUrl: './sprint-page.component.html',
  styleUrls: ['./sprint-page.component.css']
})
export class SprintPageComponent implements OnInit {

  private projectid;
  public displayMessage = false;
  public alertMessage: string;
  public sprints;
  
  constructor(private sprintService: SprintService, private router: Router, private route: ActivatedRoute,
     private projectService: ProjectService ) { }

  ngOnInit() {
    this.projectid = this.route.snapshot.paramMap.get('projectid');
    this.loadSprints(true);
  }

  loadSprints(refresh: boolean): void {
    this.sprintService.getSprints(this.projectid, refresh).subscribe(
      (res: Sprint[]) => {
        this.sprints = res;
        // console.log(this.sprints);
      },
      () => {
        this.displayMessage = true;
        this.alertMessage = 'Error: Could not load sprints';
      }
    );
  }

  onNewSprints(event): void {
    const project = this.projectService.getProject();
    if (this.sprints === null) {
    this.sprintService.addNewSprint('1', project, event.release)
      .subscribe(
        () => {
          this.displayMessage = true;
          this.alertMessage = 'sprint added successfully';
          this.loadSprints(true);
        },
        () => {
          this.displayMessage = true;
          this.alertMessage = 'sprint was unsucessfully created';
        }
      
      );
    } else {
      // console.log('herro');
      const num = this.sprints[this.sprints.length - 1];
      const sprintNum = num.number + 1;
      this.sprintService.addNewSprint( sprintNum , project, event.release)
      .subscribe(
        () => {
          this.displayMessage = true;
          this.alertMessage = 'sprint added successfully';
          this.loadSprints(true);
        },
        () => {
          this.displayMessage = true;
          this.alertMessage = 'sprint was unsucessfully created';
        }      
      );


    }
  }



}