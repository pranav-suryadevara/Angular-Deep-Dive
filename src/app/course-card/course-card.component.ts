import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
} from "@angular/core";
import { CourseImageComponent } from "../course-image/course-image.component";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
  @Input() course: Course;
  @Input() cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent, { read: ElementRef })
  image: CourseImageComponent;

  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<CourseImageComponent>;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.image);
  }
  ngAfterContentInit(): void {
    console.log(this.images);
  }

  onCourseView() {
    console.log("Card Component - button clicked ...");

    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category === "BEGINNER") {
      return "beginner";
    }
  }

  cardStyles(input) {
    return { "text-decoration": "underline" };
  }
}
