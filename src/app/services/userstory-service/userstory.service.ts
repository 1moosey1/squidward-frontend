import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth-service/auth.service';

@Injectable()
export class UserstoryService {
  private userstories = 'userstoryInfo';
  private userstory = 'userstory';

  constructor(private http: HttpClient, private authService: AuthService) { }

  newUserstories(sprint, story, difficulty): Observable<any> {
    return this.http.post('http://localhost:8080/api/userstory/new',
                    {'story': story, 'difficulty': difficulty, 'sprint': {id: sprint.id}});
  }

  getUserstories(sprintid: number, refresh: boolean): Observable<any> {
    console.log(sprintid);
    return new Observable<any>(observable => {
      const userstories = localStorage.getItem(this.userstories);

      if (refresh || !userstories) {
        this.http.get(`http://localhost:8080/api/userstory/${sprintid}`)
        .subscribe(
          userstoriez => {
            localStorage.setItem(this.userstories, JSON.stringify(userstoriez));
            observable.next(userstoriez);
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
        observable.next(JSON.parse(userstories));
      }
    });
  }
}
