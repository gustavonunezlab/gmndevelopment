import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { AboutMeComponent } from './about-me/about-me.component'
import { MyProjectsComponent } from './my-projects/my-projects.component'
import { DevelopmentToolsComponent } from './development-tools/development-tools.component'
import { AcademicHistoryComponent } from './academic-history/academic-history.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about_me', component: AboutMeComponent},
  { path: 'my_projects', component: MyProjectsComponent},
  { path: 'development_tools', component: DevelopmentToolsComponent},
  { path: 'academic_history', component: AcademicHistoryComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
