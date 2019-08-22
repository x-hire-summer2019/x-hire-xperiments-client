/* Needed model imports */
import { IPodParticipant } from "./pod-participant.model";

/**
 * Used for information concerning a single pod.
 *
 * @field id: number
 * @field name: string
 * @field organizer: string
 * @field organizerEmail: string
 * @field created: string
 * @field status: string
 * @field participants: IPodParticipant[]
 *
 */
export interface IPod {
  id: number;
  name: string;
  organizer: string;
  organizerEmail: string;
  created: string; // change to date?
  status: string;
  participants: IPodParticipant[];
} // end interface
