import { Component, OnInit } from '@angular/core';
import { GraphService } from '../../../services/graph/graph.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  private sprintid;
  private data;

  constructor(private graphService: GraphService, private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sprintid = this.route.snapshot.paramMap.get('sprintid');
    this.data = this.graphService.getGraphDate(this.sprintid).subscribe(res => {
      this.data = res;
    }) ;
  }

  getData() {
    // for(int i = 0; i < this.data.difficulty.)
    // const multi = [
      
    // ];

    // return multi;
  }

}
