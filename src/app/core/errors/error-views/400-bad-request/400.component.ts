/* Angular imports */
import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-error-400",
  templateUrl: "./400.component.html",
  styleUrls: ["../../app-error.component.scss"]
})
export class Error400Component {
  public constructor(private titleService: Title) {
    this.titleService.setTitle("MoarStats.io | 400 Bad Request");
  }
}
