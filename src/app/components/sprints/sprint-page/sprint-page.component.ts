import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { SprintService } from '../../../services/sprint-service/sprint-service.service';
import { Router, Route, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ProjectService } from '../../../services/project-service/project.service';
import Sprint from '../../../utility/Sprint';
import * as moment from 'moment';

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

  private project;
  
  constructor(private sprintService: SprintService, private router: Router, private route: ActivatedRoute,
     private projectService: ProjectService ) { }

  ngOnInit() {
    this.projectid = this.route.snapshot.paramMap.get('projectid');
    this.project = this.projectService.getProject();
    this.loadSprints(false);
  }

  loadSprints(refresh: boolean): void {
    this.sprintService.getSprints(this.projectid, refresh).subscribe(
      (res: Sprint[]) => {
        this.sprints = res.reverse();
        const sprintsize = this.sprints.length;
        
        for (let i = 0; i < sprintsize; i++) {
          this.sprints[i].startDate = moment(this.sprints[i].startDate).format('MM/DD/YYYY');
          this.sprints[i].endDate = moment(this.sprints[i].endDate).format('MM/DD/YYYY');
        }

      },
      () => {
        this.displayMessage = true;
        this.alertMessage = 'Error: Could not load sprints';
      }
    );
  }

  onNewSprints(event): void {
    const project = this.projectService.getProject();

    if (this.sprints.length < 1) {
    this.sprintService.addNewSprint('1', project, event.release, event.start_date, event.end_date)
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
<<<<<<< Updated upstream
=======
      // console.log('herro');
>>>>>>> Stashed changes
      const num = this.sprints[0];
      const sprintNum = num.number + 1;
      this.sprintService.addNewSprint( sprintNum , project, event.release, event.start_date, event.end_date)
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
