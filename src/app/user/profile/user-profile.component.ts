/* Angular imports */
import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
/* Service imports */

@Component({
  selector: "app-home",
  templateUrl: "./user-profile.component.html"
})
export class UserProfileComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("X-hire Digital Pods - Profile");
  } // end of constructor
} // end of class
