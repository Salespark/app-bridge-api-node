/**
 * To send the http post requests
 *
 * @param {String} path
 * @param {*} data
 * @return {Promise<AxiosResponse>} The response from the API
 * */
export function postRequest(path: string, data: any): Promise<AxiosResponse>;
import { AxiosResponse } from "axios";
