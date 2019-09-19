/* Angular imports */
import { Component, OnInit } from "@angular/core";

/* Service imports */
import { PodsService } from "../../../core/services/pods/pods.service";
import { ModalService } from "../../../core/services/modals/modal.service";

/* interface imports */
import { IPod } from "../../../core/interfaces/pods/pod.model";

@Component({
  selector: "app-pod-modal",
  templateUrl: "./app-pod-modal.component.html"
})
export class PodModalComponent implements OnInit {
  constructor(
    private podsService: PodsService,
    private modalRef: ModalService
  ) {} // end of constructor

  ngOnInit() {} // end of ngOnInit

  /**
   *
   */
  onHandleClosePod = (): void => {
    alert("ARE YOU HAPPY DUSTIN???");
    alert("THE X IS THERE DUSTIN!!");
    alert("DID YOU SEE THE X DUSTIN??");
    alert("It changes to red on hover!!");
    alert(`“At the center of your being
    you have the answer;
    you know who you are
    and you know what you want.”
    ― Lao Tzu`);
    alert("WHICH IS THIS X DUSTIN!");
    this.modalRef.dialog.close();
  }; // end of onHandleClosePod

  /**
   * Handles the join pod form submission
   */
  onHandleJoinPod = (): void => {
    // temp data form
    alert(
      "Should be joining the pod, but everything has been commented out for now!"
    );
    // const input = new FormData();
    // this.podsService.JoinSinglePod(this.podsService.singlePod.id, input);
    this.modalRef.dialog.close();
  }; // end of onHandleJoinPod
} // end of class
