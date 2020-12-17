import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AcademicHistoryComponent } from './academic-history/academic-history.component';
import { ContactComponent } from './contact/contact.component';
import { DevelopmentToolsComponent } from './development-tools/development-tools.component';
import { HomeComponent } from './home/home.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    AcademicHistoryComponent,
    ContactComponent,
    DevelopmentToolsComponent,
    HomeComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
