import { Component, OnInit } from '@angular/core';
import { GraphService } from '../../../services/graph/graph.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { multi } from '../data';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit {
  
  multi: any[];
  private data;
  private sprintid;

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

  constructor(private graphService: GraphService, private route: ActivatedRoute) {
      Object.assign(this, {multi});
     }

  ngOnInit() {
    this.sprintid = this.route.snapshot.paramMap.get('sprintid');
    this.data = this.graphService.getGraphDate(this.sprintid).subscribe(res => {
      this.data = res;
      console.log(this.data);
    }) ;
  }

}
