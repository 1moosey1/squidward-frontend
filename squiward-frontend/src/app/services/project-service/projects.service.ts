import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ProjectsService {

  //injecting httpclient
  constructor(private http: HttpClient) { }

  //TODO: It's returning any for now but will specifically return projects class
  //getting all the projects
  getProjects(): Observable<any> {
    return this.http.get('http://localhost:8080/api/projects');
  }

  //creating new project
  createNewProject(project_name: string,
                   start_date: string,
                   end_date: string,
                   owner: string): Observable<any> {     
    //setting the header
    let header = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    //setting the body
    let body = new HttpParams()
      .set('project_name', project_name)
      .set('start_date', start_date)
      .set('end_date', end_date)
      .set('owner', owner)
    //requesting for projects from the server.
    return this.http.post('http://localhost:8080/api/projects/new',body.toString(), {headers: header})
  }

}


//TODO: make this into different file.
export class projects {
  constructor(public user:string){}
  project_id: number;
  project_name: string;
  start_date: Date;
  end_date: Date;
  // need to change the user to user class. (this will be the list of users)
  Users: string;
  owner: string;

}
