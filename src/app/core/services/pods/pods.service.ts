/* Angular imports */
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
/* Service imports */

/* Interface imports */
import { IPod } from "../../interfaces//pods/pod.model";
import { IPodParticipant } from "../../interfaces/pods/pod-participant.model";

/* temp import of data items */
import AllPods from "../../../../temp/pods/all-pods.js";

@Injectable()
export class PodsService {
  // variable for all pods
  allPods: IPod[];
  // variable for single pod
  singlePod: IPod;

  constructor(private http: HttpClient) {}

  /**
   * Gets all the pods
   */
  GetAllPods = (): void => {
    this.allPods = AllPods();
  }; // end GetAllPods

  /**
   * Sets the single pod
   */
  SetSinglePod = (id: number): void => {
    this.singlePod = AllPods().filter(pod => pod.id === id);
  }; // end GetSinglePod

  /**
   * Makes a pod request
   */
  PostRequestPod = (): void => {
    console.log("Pod request sent!");
  }; // end PostRequestPod

  /**
   * Edits a single pod
   */
  PutSinglePod = (id: number): void => {
    console.log("Updates single pod");
  }; // end PutSinglePod

  /**
   * Joins a single pod
   */
  JoinSinglePod = (id: number): void => {
    console.log("Joins single pod");
  }; // end PutSinglePod
} // end class
