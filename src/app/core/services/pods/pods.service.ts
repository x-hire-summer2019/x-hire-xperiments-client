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

/* Environment imports */
import { ENVIRONMENT } from "../../../../environments/environment";

@Injectable()
export class PodsService {
  // variable for all pods
  allPods: IPod[] = [];
  // variable for single pod
  singlePod: IPod;

  constructor(private http: HttpClient) {}

  /**
   * Gets all the pods
   */
  GetAllPods = (): void => {
    if (this.allPods.length > 0) {
      return;
    } else {
      this.http
        .get<IPod[]>(`${ENVIRONMENT.apiUrl}/api/all-pods`)
        .subscribe(data => {
          this.allPods = data;
          console.log(data);
        });
    }
  }; // end GetAllPods

  /**
   * Sets the single pod
   * @param id  number - id of pod to get
   */
  SetSinglePod = (id: number): void => {
    this.http
      .get(`${ENVIRONMENT.apiUrl}/api/single-pod/${id}`)
      .subscribe(data => {
        console.log(data);
      });
  }; // end GetSinglePod

  /**
   * Makes a pod request
   * @param data - post data
   */
  PostRequestPod = (data): void => {
    this.http.post(`${ENVIRONMENT.apiUrl}/api/request-pod`, data).subscribe();
  }; // end PostRequestPod

  /**
   * Edits a single pod
   * @param id number - id of pod to edit
   * @param data - information to edit pod with
   */
  PutSinglePod = (id: number, data): void => {
    this.http
      .put(`${ENVIRONMENT.apiUrl}/api/single-pod/${id}`, data)
      .subscribe();
  }; // end PutSinglePod

  /**
   * Joins a single pod
   * @param id number - id of pod to join
   * @param data - information to post
   */
  JoinSinglePod = (id: number, data): void => {
    this.http
      .post(`${ENVIRONMENT.apiUrl}/api/join-pod/${id}`, data)
      .subscribe();
  }; // end PutSinglePod
} // end class
