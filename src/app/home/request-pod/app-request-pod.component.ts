/* Angular imports */
import { Component } from "@angular/core";

/* Service imports */
import { PodsService } from "../../core/services/pods/pods.service";

@Component({
  selector: "app-single-pod",
  templateUrl: "./app-request-pod.component.html"
})
export class RequestPodComponent {
  constructor(private podsService: PodsService) {} // end of constructor

  /**
   * Handles the request pod form request
   */
  onHandleRequest = (): void => {
    this.podsService.PostRequestPod();
  }; // end of onHandleRequest
} // end of class
