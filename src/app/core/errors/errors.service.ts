/* Angular imports */
import { Router } from "@angular/router";

export class ErrorService {
  constructor(private router: Router) {}
  /**
   *  BadRequest will navigate user to the 400 bad request page
   */
  BadRequest() {
    this.router.navigate(["error/400"]);
  } // end of BadRequest

  /**
   *  Unauthorized will navigate user to the 401 unauthorized page
   */
  Unauthorized() {
    this.router.navigate(["error/401"]);
  } // end of Unauthorized

  /**
   *  Forbidden will navigate user to the 403 forbidden page
   */
  Forbidden() {
    this.router.navigate(["error/403"]);
  } // end of Forbidden

  /**
   *  NotFound will navigate user to the 404 not found page
   */
  NotFound() {
    this.router.navigate(["error/404"]);
  } // end of NotFound

  /**
   *  InternalServerError will navigate user to the 500 internal server error page
   */
  InternalServerError() {
    this.router.navigate(["error/500"]);
  } // end of InternalServerError

  /**
   *  Indeterminate will navigate user to the indeterminate error page
   */
  Indeterminate() {
    this.router.navigate(["error/indeterminate"]);
  } // end of Indeterminate
} // end of class
