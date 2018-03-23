import { Component, OnInit, Injectable } from '@angular/core';
import { SprintService } from '../../../services/sprint-service/sprint-service.service';
import { Router, Route, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ProjectService } from '../../../services/project-service/project.service';

@Component({
  selector: 'app-sprint-page',
  templateUrl: './sprint-page.component.html',
  styleUrls: ['./sprint-page.component.css']
})
export class SprintPageComponent implements OnInit {

  private projectid;
  private sprints;
  
  constructor(private sprintService: SprintService, private router: Router, private route: ActivatedRoute,
     private projectService: ProjectService ) { }

  ngOnInit() {
    this.projectid = this.route.snapshot.paramMap.get('projectid');

    this.sprintService.getSprints(this.projectid, false).subscribe(
      res => {
        this.sprints = res;
        console.log(this.sprints);
      }
    );
    // this.loadSprints(false);
  }

  // loadSprints(refresh: boolean) {
  //   this.sprintService.getSprints(this.project.id).subscribe(res => {
  //     this.sprints = localStorage.getItem(this.sprints);
  //     this.sprints = JSON.parse(this.sprints);
  //   });
  // }

}
