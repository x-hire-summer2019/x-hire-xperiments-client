/* Angular imports */
import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
/* Service imports */

@Component({
  selector: "app-home",
  templateUrl: "./contributors.component.html"
})
export class ContributorsComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("X-hire Digital Pods - Contributors");
  } // end of constructor
} // end of class
