/**
 * To send the http post requests
 *
 * @param {String} path
 * @param {*} data
 * @return {Promise<AxiosResponse>} The response from the API
 * */
export function postRequest(path: string, data: any): Promise<AxiosResponse>;
/**
 * To send the http put requests
 *
 * @param {String} path
 * @param {*} data
 * @return {Promise<AxiosResponse>} The response from the API
 * */
export function putRequest(path: string, data: any): Promise<AxiosResponse>;
import { AxiosResponse } from "axios";
