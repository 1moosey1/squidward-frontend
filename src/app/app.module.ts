import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Router} from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AppRoutesModule } from './/app-routes.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { NewProjectButtonComponent } from './components/projects/new-project-button/new-project-button.component';
import { NewSprintButtonComponent } from './components/sprints/new-sprint-button/new-sprint-button.component';
import { SprintListComponent } from './components/sprints/sprint-list/sprint-list.component';
import { SprintComponent } from './components/sprints/sprint/sprint.component';
import { UserstoryListComponent } from './components/userstories/userstory-list/userstory-list.component';
import { UserstoryComponent } from './components/userstories/userstory/userstory.component';
import { NewUserstoryButtonComponent } from './components/userstories/new-userstory-button/new-userstory-button.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectListComponent,
    ProjectComponent,
    NewProjectButtonComponent,
    NewSprintButtonComponent,
    SprintListComponent,
    SprintComponent,
    UserstoryListComponent,
    UserstoryComponent,
    NewUserstoryButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    FormsModule,
    RouterModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
