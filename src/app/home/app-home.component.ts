/* Angular imports */
import { Component, OnInit } from "@angular/core";

/* Service imports */
import { PodsService } from "../core/services/pods/pods.service";

/* interface imports */
import { IPod } from "../core/interfaces/pods/pod.model";

@Component({
  selector: "app-home",
  templateUrl: "./app-home.component.html"
})
export class HomeComponent implements OnInit {

  constructor(private podsService: PodsService) {} // end of constructor
  ngOnInit() {
    // make better logic here
    this.podsService.GetAllPods();
  } // end of ngOnInit

  /**
   * Sets the clicked pod as the single pod in the pods service
   * @param id : number - the id of the pod
   */
  setThePod = (id: number) => {
    this.podsService.SetSinglePod(id);
  }; // end of setThePod
} // end of class
