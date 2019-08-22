/* Angular imports */
import {
  NgModule,
  APP_INITIALIZER,
  ErrorHandler,
  ModuleWithProviders,
  SkipSelf,
  Optional
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
/* Environment imports */
import { EnvironmentConfig } from "./environment-config";

/* Service imports */
import { AuthService, AuthGuard, PodsService } from "./services/index";

/* Module imports */
import { AppErrorModule } from "./errors/app-error.module";

/* Interceptor imports */

@NgModule({
  declarations: [],
  imports: [CommonModule, AppErrorModule],
  providers: [AuthService, AuthGuard, PodsService]
})
export class CoreModule {
  // Prevent core module from being injected multiple times
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        "CoreModule is already loaded. Import it in the AppModule only"
      );
    }
  } // end of constructor

  static forRoot(config: EnvironmentConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [{ provide: EnvironmentConfig, useValue: config }]
    };
  } // end of static forRoot
} // end of class CoreModule
