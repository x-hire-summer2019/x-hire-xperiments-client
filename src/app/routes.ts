/* Angular imports */
import { Routes } from "@angular/router";
/* Component imports */
import { ErrorComponent } from "./core/errors/error.component";
import { LandingComponent } from "./landing/index";
import {
  HomeComponent,
  RequestPodComponent,
  SinglePodComponent
} from "./home/index";

import { ContributorsComponent } from "./extras/index";
import { UserProfileComponent } from "./user/index";

/* Guard imports */
import { AuthGuard } from "./core/services/guards/index";

export const APPROUTES: Routes = [
  { path: "error/:error", component: ErrorComponent },
  { path: "", component: LandingComponent, pathMatch: "full" },
  { path: "contributors", component: ContributorsComponent },
  {
    path: "profile",
    canActivate: [AuthGuard],
    component: UserProfileComponent
  },
  { path: "home", canActivate: [AuthGuard], component: HomeComponent },
  {
    path: "request-pod",
    canActivate: [AuthGuard],
    component: RequestPodComponent
  },
  {
    path: "single-pod/:id",
    canActivate: [AuthGuard],
    component: SinglePodComponent
  },
  { path: "**", redirectTo: "error/404" }
];
