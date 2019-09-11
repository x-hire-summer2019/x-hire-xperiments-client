/* Angular imports */
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
/* Service imports */
import { PodsService } from "../../core/services/pods/pods.service";

/* interface imports */
import { IPod } from "../../core/interfaces/pods/pod.model";

@Component({
  selector: "app-single-pod",
  templateUrl: "./app-single-pod.component.html"
})
export class SinglePodComponent implements OnInit {
  constructor(private podsService: PodsService, private titleService: Title) {
    this.titleService.setTitle("X-hire Digital Pods - Single Pod");
  } // end of constructor

  ngOnInit() {} // end of ngOnInit

  /**
   * Handles the join pod form submission
   */
  onHandleJoinPod = (): void => {
    // temp data form
    const input = new FormData();

    this.podsService.JoinSinglePod(this.podsService.singlePod.id, input);
  }; // end of onHandleJoinPod
} // end of class
