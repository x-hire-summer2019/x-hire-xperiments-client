/* Angular imports */
import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-error-403",
  templateUrl: "./403.component.html",
  styleUrls: ["../../app-error.component.scss"]
})
export class Error403Component {
  public constructor(private titleService: Title) {
    this.titleService.setTitle("MoarStats.io | 403 Forbidden");
  }
}
