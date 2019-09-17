/* Angular imports */
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
/* Service imports */

/* Interface imports */
import { IUser } from "../../interfaces/user/user.model";
import { EmailValidator } from "@angular/forms";

@Injectable()
export class AuthService {
  // variable for current user
  currentUser: IUser;
  // variable to control redirects
  redirectUrl: string;

  constructor(private router: Router) {}

  /**
   * Logs in user
   * @param userName - string of user's name
   * @param password - string of user's password
   */
  loginUser = (userName: string, password: string) => {
    // possible log of user log in???
    this.currentUser = {
      id: 1,
      email: "email@email.com",
      firstName: "Minion",
      lastName: "Minion",
      role: "user"
    };
    /** redirects for successful login */
    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
    } else {
      this.router.navigate(["/home"]);
    }
  }; // end of loginUser

  /**
   * Checks if user isAuthenticated
   */
  isAuthenticated() {
    return !!this.currentUser;
  } // end of isAuthenticated

  /**
   * Log out current user
   */
  logoutUser() {
    this.currentUser = undefined;
    this.router.navigate(["/"]);
  } // end of logoutUser
} // end class
