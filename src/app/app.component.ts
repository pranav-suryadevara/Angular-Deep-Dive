import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, DoCheck {
  courses$: Observable<Course[]>;

  courses: Course[];
  loaded: boolean = false;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // this.courses$ = this.coursesService.loadCourses();

    this.coursesService.loadCourses().subscribe((courses) => {
      this.courses = courses;
      this.loaded = true;
      // this.cd.markForCheck();
    });
  }

  ngDoCheck(): void {
    console.log("DoCheck called");
    if (this.loaded) {
      this.cd.markForCheck();
      console.log("called cd.markForCheck()");

      this.loaded = false;
    }
  }
  save(course: Course) {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log("Course Saved"));
  }

  onEditCourse() {}
}
