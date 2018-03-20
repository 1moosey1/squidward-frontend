import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-sprint-button',
  templateUrl: './new-sprint-button.component.html',
  styleUrls: ['./new-sprint-button.component.css']
})
export class NewSprintButtonComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navUserstories(): void {
    this.router.navigate(['userstories']);
  }
}
