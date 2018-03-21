import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Router} from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AppRoutesModule } from './/app-routes.module';

// Bootstrap in TypeScript
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/loginService/login.service';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { NewProjectButtonComponent } from './components/projects/new-project-button/new-project-button.component';
import { NewSprintButtonComponent } from './components/sprints/new-sprint-button/new-sprint-button.component';
import { SprintListComponent } from './components/sprints/sprint-list/sprint-list.component';
import { UserstoryListComponent } from './components/userstories/userstory-list/userstory-list.component';
import { UserstoryComponent } from './components/userstories/userstory/userstory.component';
import { NewUserstoryButtonComponent } from './components/userstories/new-userstory-button/new-userstory-button.component';
import { ProjectsService } from './services/project-service/project.service';
import { CookieService } from 'ngx-cookie-service'
import { SprintService } from './services/sprintService/sprint-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectListComponent,
    NewProjectButtonComponent,
    NewSprintButtonComponent,
    SprintListComponent,
    UserstoryListComponent,
    UserstoryComponent,
    NewUserstoryButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    FormsModule,
    RouterModule,
    // Bootstrap in TypeScript
    NgbModule.forRoot()
  ],
  providers: [CookieService, LoginService, ProjectsService, SprintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
