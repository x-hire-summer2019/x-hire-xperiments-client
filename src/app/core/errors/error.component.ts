/* Angular imports */
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-error-component",
  templateUrl: "./app-error.component.html",
  styleUrls: ["./app-error.component.scss"]
})
export class ErrorComponent implements OnInit {
  error = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.error = this.route.snapshot.paramMap.get("error");
  } // end of ngOnInit
} // end of ErrorComponent
