import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiGlobals } from '../../utility/ApiGlobals';

@Injectable()
export class ProjectsService {

  private project: Project;

  // injecting httpclient
  constructor(private api: ApiGlobals, private http: HttpClient) { }

  // getting all owned projects
  getOwnedProjects(): Observable<any> {
    return this.http.get(this.api.apiRoot + this.api.ownedURI,
      { withCredentials: true });
  }

  // creating new project
  createNewProject(projectName: string): Observable<any> {

    // requesting projects from the server.
    return this.http.post(this.api.apiRoot + this.api.newURI,
      {name: projectName},
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials: true
      });
  }

  setProject(id, name, owner, users) {
    this.project = {
      id: id,
      name: name,
      owner: owner,
      users: users
    };
  }

  getProject() {
    return this.project;
  }
}

export class Project {
  id: number;
  name: string;
  owner;
  users;
}