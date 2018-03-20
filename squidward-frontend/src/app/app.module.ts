import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


// Bootstrap in TypeScript
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NewProjectButtonComponent } from './components/projects/new-project-button/new-project-button.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { NewSprintButtonComponent } from './components/sprints/new-sprint-button/new-sprint-button.component';
import { SprintComponent } from './components/sprints/sprint/sprint.component';
import { SprintListComponent } from './components/sprints/sprint-list/sprint-list.component';
import { NewUserstoryButtonComponent } from './components/userstories/new-userstory-button/new-userstory-button.component';
import { UserstoryComponent } from './components/userstories/userstory/userstory.component';
import { UserstoryListComponent } from './components/userstories/userstory-list/userstory-list.component';
import { LoginService } from './services/login.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'sprints', component: SprintComponent },
  { path: 'userstories', component: UserstoryComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewProjectButtonComponent,
    ProjectComponent,
    ProjectListComponent,
    NewSprintButtonComponent,
    SprintComponent,
    SprintListComponent,
    NewUserstoryButtonComponent,
    UserstoryComponent,
    UserstoryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
