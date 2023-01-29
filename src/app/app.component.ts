import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChild(HighlightedDirective)
  highlighted: HighlightedDirective;

  @ViewChildren(CourseCardComponent, { read: HighlightedDirective })
  highlighted2: HighlightedDirective;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef>;

  onToggle(isHighLighted: boolean) {
    console.log(isHighLighted);
  }

  constructor() {}

  ngAfterViewInit() {
    console.log(this.highlighted);
    console.log(this.highlighted2);
  }

  onCourseSelected(course: Course) {}
}
