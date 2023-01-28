import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChild("cardRef1", { read: ElementRef })
  cardHTMLReference: CourseCardComponent;

  @ViewChild("cardRef2")
  card2: CourseCardComponent;

  @ViewChild("container")
  containerDiv: ElementRef;

  @ViewChild("courseImage")
  containerChildImage: ElementRef;

  constructor() {
    // at the time of calling the constructor the variables are not populated.
    console.log("card1", this.cardHTMLReference);
    console.log("card2", this.card2);
    console.log("Container", this.containerDiv);
  }
  ngAfterViewInit(): void {
    console.log("card1", this.cardHTMLReference);
    console.log("card2", this.card2);
    console.log("Container", this.containerDiv);

    console.log("Container", this.containerChildImage);

    // this.courses[0].description = "test"; // throws error
  }

  onCourseSelected(course: Course) {}
}
