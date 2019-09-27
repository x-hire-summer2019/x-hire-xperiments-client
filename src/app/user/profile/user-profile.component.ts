/* Angular imports */
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
/* Service imports */
import { AuthService } from "../../core/services/auth/auth.service";
import { PodsService } from "../../core/services/pods/pods.service";

@Component({
  selector: "app-home",
  templateUrl: "./user-profile.component.html"
})
export class UserProfileComponent implements OnInit {
  constructor(
    private titleService: Title,
    public auth: AuthService,
    public podsService: PodsService
  ) {
    this.titleService.setTitle("X-hire Digital Pods - Profile");
  } // end of constructor

  ngOnInit() {
    if (!this.podsService.singlePod) {
      this.podsService.singlePod = this.podsService.allPods[0];
    }
  }
} // end of class
