import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesItemComponent } from './courses/courses-item/courses-item.component';
import { SearchButtonComponent } from './shared/buttons/search-button/search-button.component';
import { AddButtonComponent } from './shared/buttons/add-button/add-button.component';
import { ButtonComponent } from './shared/buttons/button/button.component';
import { LoadMoreComponent } from './courses/load-more/load-more.component';
import { LogoComponent } from './shared/logo/logo.component';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import { LoginComponent } from './header/login/login.component';
import { LogoffButtonComponent } from './header/logoff-button/logoff-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SectionComponent,
    FooterComponent,
    CoursesComponent,
    CoursesItemComponent,
    SearchButtonComponent,
    AddButtonComponent,
    ButtonComponent,
    LoadMoreComponent,
    LogoComponent,
    CoursePageComponent,
    LoginComponent,
    LogoffButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
