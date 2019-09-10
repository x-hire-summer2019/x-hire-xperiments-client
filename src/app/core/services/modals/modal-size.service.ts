/* Angular imports */
import { Injectable } from "@angular/core";
import { MatDialogConfig } from "@angular/material";

@Injectable()
export class ModalSizeService {
  MatDialog = new MatDialogConfig();

  constructor() {}
/**
 *
 */
  getSmallDialog(): MatDialogConfig {
    this.MatDialog.width = "50%";
    this.MatDialog.height = "40%";
    return this.MatDialog;
  }
  /**
   *
   */
  getMediumDialog(): MatDialogConfig {
    this.MatDialog.width = "60%";
    this.MatDialog.height = "50%";
    return this.MatDialog;
  }
  /**
   *
   */
  getLargeDialog(): MatDialogConfig {
    this.MatDialog.width = "80%";
    this.MatDialog.height = "80%";
    this.MatDialog.maxHeight = "700px";
    this.MatDialog.maxWidth = "300px";
    return this.MatDialog;
  }
  /**
   *
   */
  getLargeEditDialog(): MatDialogConfig {
    this.MatDialog.width = "80%";
    this.MatDialog.height = "80%";
    return this.MatDialog;
  }
} // end class
