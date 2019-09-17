/* Angular imports */
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
/* Service imports */
import { AuthService } from "../core/services/auth/auth.service";

@Component({
  selector: "app-landing",
  templateUrl: "./app-landing.component.html"
})
export class LandingComponent {
  loginForm = new FormGroup({
    userName: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  constructor(
    public auth: AuthService,
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle("X-hire Digital Pods - Log in");
  }

  /**
   * convenience getter for easy access to form fields
   */
  get f() {
    return this.loginForm.controls;
  } // end f getter

  /**
   *  Handles user login and redirects to home screen
   */
  onHandleUserLogin = () => {
    // run login command from service
    this.auth.loginUser(
      this.loginForm.value.userName,
      this.loginForm.value.password
    );
    // redirect to home
    // this.router.navigate(["/home"]);
  }; // end of onHandleUserLogin
}
