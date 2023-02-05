import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Inject,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Attribute,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";
import { CoursesService } from "../services/courses.service";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  constructor(private coursesService: CoursesService) {
    console.log("constructor is called", this.course);
  }

  ngOnInit() {
    console.log("ngOnInit is called", this.course);
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes);
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }

  onTitleChanged(newTitle: string): void {
    this.course.description = newTitle;
  }
}
