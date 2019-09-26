/* Angular imports */
import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { Title } from "@angular/platform-browser";
/* Service imports */
import { PodsService } from "../core/services/pods/pods.service";
import { ModalSizeService } from "../core/services/modals/modal-size.service";
import { ModalService } from "../core/services/modals/modal.service";
import { AuthService } from "../core/services/auth/auth.service";

/* Component imports */
import { PodModalComponent } from "./utility/index";

/* interface imports */
import { IPod } from "../core/interfaces/pods/pod.model";

@Component({
  selector: "app-home",
  templateUrl: "./app-home.component.html"
})
export class HomeComponent implements OnInit {
  constructor(
    public podsService: PodsService,
    public dialog: MatDialog,
    private modalSize: ModalSizeService,
    private modalRef: ModalService,
    private titleService: Title,
    private auth: AuthService
  ) {
    this.titleService.setTitle("X-hire Digital Pods - Home");
  } // end of constructor
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

  /**
   * Opens the modal
   */
  onHandleOpenModal(pod: IPod) {
    this.podsService.singlePod = pod;

    const dialogRef = this.dialog.open(
      PodModalComponent,
      this.modalSize.getMediumDialog()
    );

    this.modalRef.dialog = dialogRef;
  } // end of onHandleOpenModal
} // end of class
