import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '@app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MockDataService } from '@app/mock-data.service';
import { AppLoader } from '@app/loader/loader.component';
import {CoursesModule} from "@features/courses/courses.module";
import {CoursesListModule} from "@features/courses/courses-list/courses-list.module";
import {CourseInfoModule} from "@features/course-info/course-info.module";
import {AppRoutingModule} from "@app/app-routing-module";

@NgModule({
  declarations: [
    AppComponent, AppLoader
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, CoursesModule, CoursesListModule, CourseInfoModule, AppRoutingModule
  ],
  providers: [MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
