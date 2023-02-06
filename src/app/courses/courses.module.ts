import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseCardComponent } from "./course-card/course-card.component";
import { CourseImageComponent } from "./course-image/course-image.component";
import { CoursesService } from "./services/courses.service";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { NgxUnlessDirective } from "./directives/ngx-unless.directive";
import { FilterByCategoryPipe } from "./filter-by-category.pipe";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/compiler";

@NgModule({
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    FilterByCategoryPipe,
  ],
  imports: [CommonModule],
  exports: [CourseCardComponent, CourseImageComponent, FilterByCategoryPipe],
  providers: [CoursesService],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA], // in real this should work without being commented but i think version issue.
})
export class CoursesModule {}
