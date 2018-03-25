import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class UserstoryService {
  constructor(private http: HttpClient) { }

  newUserstories(sprint, story, difficulty): Observable<any> {
    console.log(sprint, story, difficulty);
    return this.http.post('http://localhost:8080/api/userstory/new',
                    {'story': story, 'difficulty': difficulty, 'sprint': {id: sprint.id}});
  }
}
