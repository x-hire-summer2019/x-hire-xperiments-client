/* Angular imports */
import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
/* Service imports */
import { PodsService } from "../../core/services/pods/pods.service";

@Component({
  selector: "app-single-pod",
  templateUrl: "./app-request-pod.component.html"
})
export class RequestPodComponent {
  requestPod = new FormGroup({
    name: new FormControl("", [Validators.required]),
    technologyName: new FormControl("", [Validators.required]),
    toolName: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required])
  });

  constructor(private podsService: PodsService,   private titleService: Title) {
    this.titleService.setTitle("X-hire Digital Pods - Request Pod");
  } // end of constructor
  /**
   * convenience getter for easy access to form fields
   */
  get f() {
    return this.requestPod.controls;
  } // end f getter

  /**
   * Handles the request pod form request
   */
  onHandleRequest = (): void => {
    // temp data form data
    const input = new FormData();

    this.podsService.PostRequestPod(input);
  }; // end of onHandleRequest
} // end of class
