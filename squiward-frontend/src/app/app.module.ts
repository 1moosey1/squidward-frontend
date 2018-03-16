import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Router} from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AppRoutesModule } from './/app-routes.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { NewProjectButtonComponent } from './components/projects/new-project-button/new-project-button.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectListComponent,
    ProjectComponent,
    NewProjectButtonComponent
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
