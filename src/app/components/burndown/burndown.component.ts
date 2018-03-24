

import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './burndown.component.html',
  styleUrls: ['./burndown.component.css']
})
export class BurndownComponent {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];
  
   // options
   showXAxis = true;
   showYAxis = true;
   gradient = true;
   showLegend = true;
   showXAxisLabel = true;
   xAxisLabel = 'Projects';
   showYAxisLabel = true;
   yAxisLabel = 'Status';
 
   colorScheme = {
     domain: ['#5AA454', '#A10A28', '#C7B42C']
   };

  constructor() { Object.assign(this, { single }) }

  onSelect(event) {
    console.log(event);
  }

}
