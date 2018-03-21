import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ProjectsService {
  private project: project;
  //injecting httpclient
  constructor(private http: HttpClient) { }

  //getting all owned projects
  getOwnedProjects(): Observable<any> {
    return this.http.get('http://localhost:8080/api/projects/owned',{withCredentials: true});
  }

  //creating new project
  createNewProject(project_name: string): Observable<any> {     

    //requesting for projects from the server.
    return this.http.post('http://localhost:8080/api/projects/new', 
                          {name: project_name}, 
                          {headers: new HttpHeaders().set('Content-Type', 'application/json'), withCredentials: true})
  }

  setProject(id, name, owner, users) {
    this.project = {id: id,
                    name: name,
                    owner: owner,
                    users: users};
  }

  getProject() {
    return this.project;
  }

}

export class project {
  id: number;
  name: string;
  owner;
  users;
}