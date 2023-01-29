import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[highlighted]",
})
export class HighlightedDirective {
  @Input("highlighted")
  isHighLighted = false;

  constructor() {
    console.log("Directive Created");
  }

  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.isHighLighted;
  }

  @HostBinding("attr.disabled")
  get disabled() {
    return true;
  }

  // @HostBinding("style.border")
  // get cssClasses() {
  //   return "12px solid green";
  // }

  // @HostBinding("className")
  // get cssClasses() {
  //   return "highlighted";
  // }

  // @HostBinding("class.highlighted") // both perform the same action
  // get cssClasses() {
  //   return true;
  // }
}
