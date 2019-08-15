/* Angular imports */
import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-error-indeterminate",
  templateUrl: "./indeterminate.component.html",
  styleUrls: ["../../app-error.component.scss"]
})
export class ErrorIndeterminateComponent {
  public constructor(private titleService: Title) {
    this.titleService.setTitle("MoarStats.io");
  }
}
