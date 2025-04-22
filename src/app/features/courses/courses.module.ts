import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CourseAddPageComponent } from './pages/course-add-page/course-add-page.component';
import { CourseEditPageComponent } from './pages/course-edit-page/course-edit-page.component';
import { CourseInfoPageComponent } from './pages/course-info-page/course-info-page.component';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseAddPageComponent,
    CourseEditPageComponent,
    CourseInfoPageComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule {}
