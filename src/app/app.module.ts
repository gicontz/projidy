import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { SearchComponent } from './search/search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SidebarComponent,
    ContentPageComponent,
    SearchComponent,
    DashboardComponent,
    ProjectsComponent,
    NewsfeedComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
