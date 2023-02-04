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
  Self,
  SkipSelf,
  Optional,
} from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";
import { CoursesService } from "../services/courses.service";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  providers: [CoursesService],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  // constructor(@Self() private coursesService: CoursesService) {} // uses the one delcared in the current class
  // constructor(@SkipSelf() private coursesService: CoursesService) {} // uses the one delcared in the parent class
  constructor(@Optional() private coursesService: CoursesService) {} // doesn't give error even if not injected.

  ngOnInit() {}

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
