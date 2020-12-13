import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { PersonalDataComponent } from './personal-data/personal-data.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'personal_data', component: PersonalDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
