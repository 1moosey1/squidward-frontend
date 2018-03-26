import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userstory-list',
  templateUrl: './userstory-list.component.html',
  styleUrls: ['./userstory-list.component.css']
})
export class UserstoryListComponent implements OnInit {

  @Input()
  private userstories;

  constructor() { }

  ngOnInit() {
    console.log(this.userstories);
  }

}
