import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { CourseImageComponent } from "../course-image/course-image.component";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements AfterViewInit {
  @Input() course: Course;
  @Input() cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild("courseImage")
  image;

  @ContentChild("container")
  container;

  @ContentChild(CourseImageComponent)
  image1: CourseImageComponent;

  @ContentChild(CourseImageComponent, { read: ElementRef })
  image2: CourseImageComponent;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.image);
    console.log(this.image1);
    console.log(this.image2);
    console.log(this.container);
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
