import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../../../services/project-service/project.service';
import { SprintService } from '../../../services/sprint-service/sprint-service.service';
import { Router } from '@angular/router';
import { GraphService } from '../../../services/graph/graph.service';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css']
})
export class SprintListComponent implements OnInit {
  @Input()
  private sprints;
  private project;

  constructor(private router: Router, private sprintService: SprintService, private graphService: GraphService) { }

  ngOnInit() {
  }

  openUserstories(sprint) {
    this.sprintService.setSprint(sprint);
    this.router.navigate(['/userstories', sprint.id]);
  }

  openGraph(sprint) {
    this.sprintService.setSprint(sprint);
    console.log(sprint);
    // this.router.navigate(['/graph', sprint.id]);
  }


}
