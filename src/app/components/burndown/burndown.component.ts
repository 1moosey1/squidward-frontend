
import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {single, multi} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './burndown.component.html',
  styleUrls: ['./burndown.component.css']
})
export class BurndownComponent implements OnInit  {
  
  ngOnInit() {
  }
   
  single: any[];
  multi: any[];

  view: any[] = [700, 400];
  
   // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Day of Scrum';
  showYAxisLabel = true;
  yAxisLabel = 'Points Remaining';

  colorScheme = {
    domain: ['#17202A', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
  constructor() {
    Object.assign(this, {single, multi})   
  }
  
  onSelect(event) {
    console.log(event);
  }
  
}
