import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ProjectService } from '../project-service/project.service';

@Injectable()
export class SprintService {
  private sprint: Sprint;

  constructor(private http: HttpClient) { }

  addNewSprint(sprint_number, project, release): Observable<any> {
    return this.http.post('http://localhost:8080/api/sprint/new',
                          {'number': sprint_number, 'project': project, 'release': release },
                          {withCredentials: true});
  }

  getSprints(projectid): Observable<any> {
    return this.http.get(`http://localhost:8080/api/sprint/${projectid}`, {withCredentials: true});
  }

  setSprint(id, number, project, release) {
    this.sprint = {
      id: id,
      number: number,
      project: project,
      release: release
    };
  }

  getSprint() {
    return this.sprint;
  }

}

export class Sprint {
  id;
  number;
  project;
  release;
}
