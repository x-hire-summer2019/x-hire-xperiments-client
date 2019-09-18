/* Angular imports */
import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
/* Service imports */
import { AuthService } from "../../core/services/auth/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./user-profile.component.html"
})
export class UserProfileComponent {
  constructor(private titleService: Title, public auth: AuthService) {
    this.titleService.setTitle("X-hire Digital Pods - Profile");
  } // end of constructor
} // end of class
