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
  AfterContentChecked,
  AfterViewChecked,
  DoCheck,
} from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";
import { CoursesService } from "../services/courses.service";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    AfterContentChecked,
    AfterViewChecked,
    AfterContentInit,
    AfterViewInit,
    DoCheck
{
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

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
    this.course.description = "pranav";
    this.course.category = "ADVANCED";

    // this.course.iconUrl = ""; // throws error
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
    // this.course.description = ""; // throws error
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngDoCheck(): void {
    console.log("ngDoChekc");
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }

  onTitleChanged(newTitle: string): void {
    this.course.description = newTitle;
  }
}
