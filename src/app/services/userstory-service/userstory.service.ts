import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserstoryService {
  constructor(private http: HttpClient) { }

  newUserstories(sprint, context, difficulty): Observable<any> {
    return this.http.post('http://localhost:8080/api/userstory/new',
                    {sprint: sprint, story: context, difficulty: difficulty}, {withCredentials: true});
  }

  getUserstories(sprintid): Observable<any> {
    return this.http.get('http://localhost:8080/api/userstory/${sprintid}', {withCredentials: true});
  }
}

export class Userstory {
  id;
  status;
  sprint;
  story;
  difficulty;
  doneTag;
  startTag;
  startDate;
  doneDate;
}
