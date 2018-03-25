import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class UserstoryService {
  constructor(private http: HttpClient) { }

  newUserstories(sprint, story, difficulty): Observable<any> {
    return this.http.post('http://localhost:8080/api/userstory/new',
                    {sprint: sprint, story: story, difficulty: difficulty});
  }
}
