import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GraphService {

  constructor(private http: HttpClient) {}

  getGraphDate(sprintid): Observable<any> {
    return this.http.get(`http://localhost:8080/api/sprint/burndown/${sprintid}`); 
  }

}
