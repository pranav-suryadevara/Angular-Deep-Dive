import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent {
  @Input() course: Course;
  @Input() cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseView() {
    console.log("Card Component - button clicked ...");

    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category === "BEGINNER") {
      return "beginner";
    }
    // if (this.course.category === "BEGINNER") {
    //   return ["beginner"];
    // }
    // return {
    //   beginner: this.course.category === "BEGINNER",
    // };
  }
}
