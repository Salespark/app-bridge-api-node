import Pusher from "pusher-js";

/**
 * Set axios header's
 *
 * @param {string} serverToken - Server Authorization token
 * */
export function axiosInterpretation(serverToken: string): void;
/**
 * Initialize the Pusher Client
 *
 * @param {string} serverToken - Server Authorization token
 * @return {Pusher} Pusher client instance
 * */
export function pusherClient(serverToken: string): Pusher;
