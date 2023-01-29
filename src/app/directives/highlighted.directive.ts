import { ThisReceiver } from "@angular/compiler";
import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

@Directive({
  selector: "[highlighted]",
})
export class HighlightedDirective {
  @Input("highlighted")
  isHighLighted = false;

  @Output()
  toggleHighlight = new EventEmitter<Boolean>();

  constructor() {
    console.log("Directive Created");
  }

  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.isHighLighted;
  }

  @HostListener("mouseover", ["$event"])
  mouseOver($event) {
    console.log($event);

    this.isHighLighted = true;
    this.toggleHighlight.emit(this.isHighLighted);
  }

  @HostListener("mouseleave")
  mouseLeave() {
    this.isHighLighted = false;
    this.toggleHighlight.emit(this.isHighLighted);
  }
}
