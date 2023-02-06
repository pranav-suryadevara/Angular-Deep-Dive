import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Inject,
  InjectionToken,
  Injector,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./courses/course-card/course-card.component";
import { HighlightedDirective } from "./courses/directives/highlighted.directive";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { AppConfig, APP_CONFIG, CONFIG_TOKEN } from "./config";
import { CoursesService } from "./courses/services/courses.service";
import { createCustomElement } from "@angular/elements";
import { CourseTitleComponent } from "./course-title/course-title.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  courses: Course[] = COURSES;

  coursesTotal = this.courses.length;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private injector: Injector
  ) {}

  ngOnInit() {
    const htmlElement = createCustomElement(CourseTitleComponent, {
      injector: this.injector,
    });

    customElements.define("course-title", htmlElement);
  }

  save(course: Course) {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log("Course Saved"));
  }

  onEditCourse() {
    this.courses[1].category = "ADVANCED";
  }
}
