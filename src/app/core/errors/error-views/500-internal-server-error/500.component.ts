/* Angular imports */
import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-error-500",
  templateUrl: "./500.component.html",
  styleUrls: ["../../app-error.component.scss"]
})
export class Error500Component {
  public constructor(private titleService: Title) {
    this.titleService.setTitle("MoarStats.io | 500 Internal Server Error");
  }
}
