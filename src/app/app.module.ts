import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutesModule } from './app-routes.module';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// Components
import { ApiGlobals } from './utility/ApiGlobals';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { SprintListComponent } from './components/sprints/sprint-list/sprint-list.component';
import { UserstoryListComponent } from './components/userstories/userstory-list/userstory-list.component';
import { UserstoryPageComponent } from './components/userstories/userstory-page/userstory-page.component';
import { UserstoryModalComponent } from './components/userstories/userstory-modal/userstory-modal.component';
import { AlertComponent } from './components/utility/alert/alert.component';
import { NavbarComponent } from './components/utility/navbar/navbar.component';
import { ProjectPageComponent } from './components/project/project-page/project-page.component';
import { ProjectModalComponent } from './components/project/project-modal/project-modal.component';

// Services
import { AuthService } from './services/auth-service/auth.service';
import { AuthGuardService } from './services/auth-guard-service/auth-guard.service';
import { ProjectService } from './services/project-service/project.service';
import { SprintService } from './services/sprint-service/sprint-service.service';
import { UserstoryService } from './services/userstory-service/userstory.service';
import { SprintPageComponent } from './components/sprints/sprint-page/sprint-page.component';
import { SprintModalComponent } from './components/sprints/sprint-modal/sprint-modal.component';
import { GraphComponent } from './components/graphs/graph/graph.component';
import { GraphService } from './services/graph/graph.service';
import { DataComponent } from './components/graphs/data/data.component';

function tokenGetter(): string {
  return localStorage.getItem(ApiGlobals.tokenName);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectListComponent,
    SprintListComponent,
    AlertComponent,
    NavbarComponent,
    ProjectPageComponent,
    ProjectModalComponent,
    SprintPageComponent,
    SprintModalComponent,
    UserstoryListComponent,
    UserstoryPageComponent,
    UserstoryModalComponent,
    GraphComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    FormsModule,
    RouterModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        headerName: ApiGlobals.tokenName,
        whitelistedDomains: [ApiGlobals.apiDomain],
        blacklistedRoutes: [
          ApiGlobals.apiDomain + ApiGlobals.loginURI,
          ApiGlobals.apiDomain + ApiGlobals.registerURI
        ],
        skipWhenExpired: true
      }
    }),
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [
    ApiGlobals,
    AuthService,
    AuthGuardService,
    ProjectService,
    SprintService,
    UserstoryService,
    GraphService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
