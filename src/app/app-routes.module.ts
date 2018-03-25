import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProjectPageComponent } from './components/project/project-page/project-page.component';
import { UserstoryPageComponent } from './components/userstories/userstory-page/userstory-page.component';
// import { NewUserstoryButtonComponent } from './components/userstories/new-userstory-button/new-userstory-button.component';
import { AuthGuardService } from './services/auth-guard-service/auth-guard.service';
import { SprintPageComponent } from './components/sprints/sprint-page/sprint-page.component';
import { SprintModalComponent } from './components/sprints/sprint-modal/sprint-modal.component';
import { BurndownComponent } from './components/burndown/burndown.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'projects', component: ProjectPageComponent, /*canActivate: [AuthGuardService]*/},
  {path: 'sprints/:projectid', component: SprintPageComponent, canActivate: [AuthGuardService]},
<<<<<<< HEAD
  {path: 'userstories/:sprintid', component: UserstoryListComponent, canActivate: [AuthGuardService]},
  {path: 'burndown', component: BurndownComponent},
=======
  {path: 'userstories/:sprintid', component: UserstoryPageComponent, canActivate: [AuthGuardService]},

>>>>>>> b89ef2c00a32e489bfc94cc8f884ffec011b6d7b
  // test purpose only -------
  {path: 'sprintButton', component: SprintModalComponent},
  // {path: 'userButton', component: NewUserstoryButtonComponent},
  // -------------------------
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutesModule { }
