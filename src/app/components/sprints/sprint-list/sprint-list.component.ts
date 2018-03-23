import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../../../services/project-service/project.service';
import { SprintService } from '../../../services/sprint-service/sprint-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css']
})
export class SprintListComponent implements OnInit {
  private sprints;

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
