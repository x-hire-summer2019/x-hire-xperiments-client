/* Angular imports */
import { Routes } from "@angular/router";
/* Component imports */
import { ErrorComponent } from "./core/errors/error.component";
import { LandingComponent } from "./landing/index";

/* Guard imports */
import { AuthGuard } from "./core/services/guards/index";

export const APPROUTES: Routes = [
  { path: "error/:error", component: ErrorComponent },
  { path: "", component: LandingComponent, pathMatch: "full" },
  { path: "**", redirectTo: "error/404" }
];
