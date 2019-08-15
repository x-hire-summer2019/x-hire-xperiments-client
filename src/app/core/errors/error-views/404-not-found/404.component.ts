/* Angular imports */
import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-error-404",
  templateUrl: "./404.component.html",
  styleUrls: ["../../app-error.component.scss"]
})
export class Error404Component {
  public constructor(private titleService: Title) {
    this.titleService.setTitle("MoarStats.io | 404 Not Found");
  }
}
