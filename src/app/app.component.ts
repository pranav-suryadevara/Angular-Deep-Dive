import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { CoursesService } from "./services/courses.service";
import { AppConfig, APP_CONFIG, CONFIG_TOKEN } from "./config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  courses = COURSES;

  constructor(
    private coursesService: CoursesService // @Inject("CONFIG_TOKEN") private config: AppConfig
  ) {}

  ngOnInit() {}

  save(course: Course) {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log("Course Saved"));
  }

  onEditCourse() {
    // this.courses[0].description = "New Value!"; //OnPush doesn't change value of the child from parent
    const course = this.courses[0];
    const newCourse: any = { ...course };
    newCourse.description = "New Value";
    this.courses[0] = newCourse;
  }
}
