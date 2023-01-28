import { Component, ElementRef, ViewChild } from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = COURSES;

  @ViewChild("cardRef1", { read: ElementRef })
  cardHTMLReference: CourseCardComponent;

  @ViewChild("cardRef2")
  card2: CourseCardComponent;

  @ViewChild("container")
  containerDiv: ElementRef;

  onCourseSelected(course: Course) {
    console.log("card1", this.cardHTMLReference);
    console.log("card2", this.card2);
    console.log("Container", this.containerDiv);
  }
}
