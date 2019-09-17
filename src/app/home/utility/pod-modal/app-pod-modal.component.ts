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
    this.modalRef.dialog.close();
  }; // end of onHandleClosePod
} // end of class
