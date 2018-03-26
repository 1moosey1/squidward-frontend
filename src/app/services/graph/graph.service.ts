import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiGlobals } from '../../utility/ApiGlobals';

@Injectable()
export class GraphService {

  constructor(private http: HttpClient) {}

  getGraphDate(sprintid): Observable<any> {
    return this.http.get(ApiGlobals.apiRoot + `/api/sprint/burndown/${sprintid}`); 
  }

}
