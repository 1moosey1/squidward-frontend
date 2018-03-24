import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ProjectService } from '../project-service/project.service';
import Sprint from '../../utility/Sprint';
import { AuthService } from '../auth-service/auth.service';

@Injectable()
export class SprintService {
  private sprints = 'sprintInfo';
  private sprint = 'sprint';

  constructor(private http: HttpClient,  private authService: AuthService) { }

  addNewSprint(sprint_number, project, release, start_date, end_date): Observable<any> {
    return this.http.post('http://localhost:8080/api/sprint/new', 
                        {'number': sprint_number, 'project': {id: project.id}, 'release': release, 
                        'start_date': start_date, 'end_date': end_date});
  }
  
  getSprints(projectid: number, refresh: boolean): Observable<any> {
    return new Observable<any>(observable => {
      const sprints = localStorage.getItem(this.sprints);

      if (refresh || !sprints) {
        this.http.get(`http://localhost:8080/api/sprint/${projectid}`)
        .subscribe(
          sprintz => {
            localStorage.setItem(this.sprints, JSON.stringify(sprintz));
            observable.next(sprintz);
          },
          (err: HttpErrorResponse) => {

            if (err.status === 401) {
              this.authService.logout();
            } else if (err.status === 403) {
              window.location.assign(err.error);
            }
            observable.error();
          });
      } else {
        observable.next(JSON.parse(sprints));
      }
    });
  }

  setSprint(sprint) {
    localStorage.setItem(this.sprint, JSON.stringify(sprint));
  }

  getSprint() {
    return JSON.parse(localStorage.getItem(this.sprint));
  }
}
