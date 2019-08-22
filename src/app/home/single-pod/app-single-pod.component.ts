/* Angular imports */
import { Component, OnInit } from "@angular/core";

/* Service imports */
import { PodsService } from "../../core/services/pods/pods.service";

/* interface imports */
import { IPod } from "../../core/interfaces/pods/pod.model";

@Component({
  selector: "app-single-pod",
  templateUrl: "./app-single-pod.component.html"
})
export class SinglePodComponent implements OnInit {
  // temp holder obj
  pod: IPod;

  constructor(private podsService: PodsService) {} // end of constructor

  ngOnInit() {
    this.pod = this.podsService.singlePod;
  } // end of ngOnInit

  /**
   * Handles the join pod form submission
   */
  onHandleJoinPod = (): void => {
    this.podsService.JoinSinglePod(this.pod.id);
  }; // end of onHandleJoinPod
} // end of class
