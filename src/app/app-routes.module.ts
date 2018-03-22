import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProjectPageComponent } from './components/project/project-page/project-page.component';
import { SprintListComponent } from './components/sprints/sprint-list/sprint-list.component';
import { UserstoryListComponent } from './components/userstories/userstory-list/userstory-list.component';
import { NewProjectButtonComponent } from './components/project/new-project-button/new-project-button.component';
import { NewSprintButtonComponent } from './components/sprints/new-sprint-button/new-sprint-button.component';
import { NewUserstoryButtonComponent } from './components/userstories/new-userstory-button/new-userstory-button.component';
import { AuthGuardService } from './services/auth-guard-service/auth-guard.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'projects', component: ProjectPageComponent, /*canActivate: [AuthGuardService]*/},
  {path: 'sprints', component: SprintListComponent, canActivate: [AuthGuardService]},
  {path: 'userstories', component: UserstoryListComponent, canActivate: [AuthGuardService]},
  // test purpose only -------
  {path: 'botton', component: NewProjectButtonComponent},
  {path: 'sprintButton', component: NewSprintButtonComponent},
  {path: 'userButton', component: NewUserstoryButtonComponent},
  // -------------------------
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutesModule { }
