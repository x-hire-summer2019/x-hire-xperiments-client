/* Angular imports */
import { Component, OnInit } from "@angular/core";

/* Service imports */
import { PodsService } from "../../../core/services/pods/pods.service";

/* interface imports */
import { IPod } from "../../../core/interfaces/pods/pod.model";

@Component({
  selector: "app-pod-modal",
  templateUrl: "./app-pod-modal.component.html"
})
export class PodModalComponent implements OnInit {
  constructor(private podsService: PodsService) {} // end of constructor

  ngOnInit() {} // end of ngOnInit
} // end of class
