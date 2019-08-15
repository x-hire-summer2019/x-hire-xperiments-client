/* Angular imports */
import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-error-401",
  templateUrl: "./401.component.html",
  styleUrls: ["../../app-error.component.scss"]
})
export class Error401Component {
  public constructor(private titleService: Title) {
    this.titleService.setTitle("MoarStats.io | 401 Unauthorized");
  }
}
