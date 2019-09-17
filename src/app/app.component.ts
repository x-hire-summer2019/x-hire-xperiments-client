import { Component } from "@angular/core";

/* Service imports */
import { AuthService } from "./core/services/auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "X-hire Digital Pods";
  constructor(public auth: AuthService) {}

  /**
   * This will logout the user
   */
  onHandleLogout() {
    this.auth.logoutUser();
  } // end of onHandleLogout
} // end of class
