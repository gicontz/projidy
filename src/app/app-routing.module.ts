import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AppComponent } from './app.component'
import { ContentPageComponent } from './content-page/content-page.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProjectsComponent } from './projects/projects.component'
import { NewsfeedComponent } from './newsfeed/newsfeed.component' 


const routes: Routes = [
  { path: 'main', component: ContentPageComponent, 
    children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'projects', component: ProjectsComponent },
        { path: 'newsfeed', component: NewsfeedComponent }
    ] 
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'home',  redirectTo: '/main', pathMatch: 'full' },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
