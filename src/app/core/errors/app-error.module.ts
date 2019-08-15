/* Angular imports */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
/* Service imports */
import { ErrorService } from "./errors.service";
/* Component imports */
import {
  ErrorComponent,
  ErrorIndeterminateComponent,
  Error400Component,
  Error401Component,
  Error404Component,
  Error403Component,
  Error500Component
} from "./index";
@NgModule({
  imports: [CommonModule],
  declarations: [
    ErrorComponent,
    ErrorIndeterminateComponent,
    Error400Component,
    Error401Component,
    Error403Component,
    Error404Component,
    Error500Component
  ],
  exports: [ErrorComponent],
  providers: [ErrorService]
})
export class AppErrorModule {}
