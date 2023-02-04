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
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  type: string;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  // Alternative way
  // constructor(
  //   private coursesService: CoursesService,
  //   @Attribute("type") private type: string
  // ) {
  //   console.log(type);
  // }

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    console.log(this.type);
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }

  onTitleChanged(newTitle: string): void {
    this.course.description = newTitle;
  }
}
