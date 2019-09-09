/* Angular imports */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { MatSelectModule } from "@angular/material";

/* Environment imports */
import { ENVIRONMENT } from "../environments/environment";
/* Module imports */
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./shared/material.module";

/* Component imports */
import { AppComponent } from "./app.component";
import { HeaderComponent, FooterComponent } from "./shared/index";
import { LandingComponent } from "./landing/index";
import {
  HomeComponent,
  RequestPodComponent,
  SinglePodComponent
} from "./home/index";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    HomeComponent,
    RequestPodComponent,
    SinglePodComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    LayoutModule,
    MatSelectModule,
    BrowserAnimationsModule,
    CoreModule.forRoot({
      environmentName: ENVIRONMENT.environmentName,
      apiTokenUrl: "",
      appUrl: ENVIRONMENT.baseUrl,
      clientVersion: ENVIRONMENT.clientVersion
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
