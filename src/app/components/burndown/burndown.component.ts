
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi} from './data';

@Component({
  selector: 'app-burndown',
  templateUrl: './burndown.component.html',
  styleUrls: ['./burndown.component.css']
})
export class BurndownComponent implements OnInit  {

  ngOnInit() {
  }
   
  single: any[];
  multi = [
    {
      'name': 'Ideal',
      'series': []
    },
    {
      'name': 'Actual',
      'series': []
    }
  ];

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

    Object.assign(this, { multi})   
  }
  

  
  onSelect(event) {
    console.log(event);
  }

  count = 0;
  
  interval;
  
  startLiveData() {
    
    this.interval = setInterval(() => {
      this.multi[1].series.push( {  'name': new Date(new Date().getTime() + (this.count * 60000)),
                                    'value': this.randValue(), 'max': '', 'min': ''} );
      this.count++;
      this.multi = [...this.multi];
    }, 1000);
  }

  stopLiveData() {
    clearInterval(this.interval);
    console.log('Live data stopped');
  }
  
  randValue() {
    return Math.floor(Math.random() * 100);
  }

  newValue(count)
  {
    return count -10 ;
    
  }

 
  
  initData() {
    for(let i =0; i< 5; i++){
      this.multi[0].series.push({
        'name': new Date(new Date().getTime() + (this.count * 60000)),
        'value':  this.newValue(50),
    
      });
    }
  }
  
}
