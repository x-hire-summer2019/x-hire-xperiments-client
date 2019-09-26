/* Needed model imports */
import { IPodParticipant } from "./pod-participant.model";

/**
 * Used for information concerning a single pod.
 *
 * @field id: number
 * @field podName?: string
 * @field description: string
 * @field organizer?: string
 * @field organizerEmail?: string
 * @field created?: string
 * @field status?: string
 * @field participants?: IPodParticipant[]
 *
 */
export interface IPod {
  id: number;
  podName: string;
  podType?: string;
  description: string;
  organizer?: string;
  organizerEmail?: string;
  created?: string; // change to date?
  status?: string;
  participants?: IPodParticipant[];
} // end interface
