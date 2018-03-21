import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './components/login/login.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { SprintListComponent } from './components/sprints/sprint-list/sprint-list.component';
import { UserstoryListComponent } from './components/userstories/userstory-list/userstory-list.component';
import { NewProjectButtonComponent } from './components/projects/new-project-button/new-project-button.component';
import { NewSprintButtonComponent } from './components/sprints/new-sprint-button/new-sprint-button.component';
import { NewUserstoryButtonComponent } from './components/userstories/new-userstory-button/new-userstory-button.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "projects", component: ProjectListComponent },
  {path: "sprints", component: SprintListComponent},
  //test purpose only -------
  {path:"botton", component: NewProjectButtonComponent},
  {path:"sprintButton", component: NewSprintButtonComponent},
  {path:"userButton", component: NewUserstoryButtonComponent},
  //-------------------------
  {path: "userstories", component: UserstoryListComponent},
  {path: "", redirectTo: "login", pathMatch: "full"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutesModule { }
