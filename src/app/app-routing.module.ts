/* Angular imports */
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
/* Route imports */
import { APPROUTES } from "./routes";
@NgModule({
  imports: [RouterModule.forRoot(APPROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
