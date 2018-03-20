import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ProjectsService {

  //injecting httpclient
  constructor(private http: HttpClient) { }

  //TODO: It's returning any for now but will specifically return projects class
  //getting all the projects
  getProjects(): Observable<any> {
    return this.http.get('http://localhost:8080/api/projects/owned',{withCredentials: true});
  }

  //creating new project
  createNewProject(project_name: string): Observable<any> {     
    //setting the header
    // let header = new HttpHeaders()
    //   .set('Content-Type', 'application/json')

    //setting the body
    //UPDATE: doesn't need the body because it accepts an object from the server here!
    // let body = new HttpParams()
    //   .set('project_name', project_name)

    //requesting for projects from the server.
    return this.http.post('http://localhost:8080/api/projects/new', {name: project_name}, {headers: new HttpHeaders().set('Content-Type', 'application/json'), withCredentials: true})
  }

}


//TODO: make this into different file.
// export class projects {
//   constructor(public user:string){}
//   project_id: number;
//   project_name: string;
//   start_date: Date;
//   end_date: Date;
//   // need to change the user to user class. (this will be the list of users)
//   Users: string;
//   owner: string;
// }