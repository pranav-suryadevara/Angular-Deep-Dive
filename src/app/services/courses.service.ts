import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  constructor() {
    console.log(
      "Hello from CoursesService, I am called only once. Single instance for whole application."
    );
  }
}
