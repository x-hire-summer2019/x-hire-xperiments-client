/* Angular imports */
import {Injectable, ErrorHandler} from "@angular/core";


@Injectable()
export class ErrorHandlerService implements ErrorHandler{
  constructor(){}


  handleError(error: any): void{
    // handle errors here

    
  } // end of handleError

} // end of class
