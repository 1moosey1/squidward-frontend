

import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {single, multi} from './data';

@Component({
  selector: 'app-root',
  template: `
  <ngx-charts-line-chart
    [view]="view"
    [scheme]="colorScheme"
    [results]="multi"
    [gradient]="gradient"
    [xAxis]="showXAxis"
    [yAxis]="showYAxis"
    [legend]="showLegend"
    [showXAxisLabel]="showXAxisLabel"
    [showYAxisLabel]="showYAxisLabel"
    [xAxisLabel]="xAxisLabel"
    [yAxisLabel]="yAxisLabel"
    [autoScale]="autoScale"
    (select)="onSelect($event)">
  </ngx-charts-line-chart>
`,
  styleUrls: ['./burndown.component.css']
})
export class BurndownComponent {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];
  
    // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
 
   colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor() { Object.assign(this, { single }) }

  onSelect(event) {
    console.log(event);
  }

}
