import { Component, OnInit } from '@angular/core';
import { GraphService } from '../../../services/graph/graph.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { multi2 } from '../data';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit {
  
  multi: any[];
  private data;
  private sprintid;
  private sprintLength;

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Days';
  showYAxisLabel = true;
  yAxisLabel = 'Points Remaining';

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

  colorScheme = {
    domain: ['#17202A', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  autoScale = true;

  constructor(private graphService: GraphService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sprintid = this.route.snapshot.paramMap.get('sprintid');
    this.showdate();
  }

  showdate() {
    this.graphService.getGraphDate(this.sprintid).toPromise()
    .then(res => {
      let sum = res.sum;
      const step = sum / res.dates.length;

      for (let i = 0; i < res.dates.length; i++) {
        this.multi[0].series.push({
          'name': moment(res.dates[i]).format('MM/DD/YYYY'),
          'value': sum
        });
        sum -= step;
      }

      for (let i = 0; i < res.dates.length; i++) {
        this.multi[1].series.push({
          'name': moment(res.dates[i]).format('MM/DD/YYYY'),
          'value': res.points[i]
        });
      }

      this.multi = [...this.multi];
    })
    .catch( res => {
      console.log(res);
      console.log('error');
    });
  }
}
