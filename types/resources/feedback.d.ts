import {ResponseDto} from "../dto/types";

/**
 * Get the list of feedback
 *
 * @param {Object | null} data - Data to fetch the relevant feedback
 * @return {Promise<ResponseDto>} List of feedback
 * */
export function list(data: any | null): Promise<ResponseDto>;
/**
 * Create a feedback
 *
 * @param {Object} data - Data to create feedback
 * @param {String} data.userId - ID of the user
 * @param {String} data.title
 * @param {String} data.description
 * @return {Promise<ResponseDto>} Create a feedback
 * */
export function create(data: {
    userId: string;
    title: string;
    description: string;
}): Promise<ResponseDto>;
/**
 * update a feedback
 *
 * @param {string} feedbackId - ID of the feedback
 * @param {Object} data - Data to update feedback
 * @param {String} data.userId - ID of the user
 * @param {String} data.title
 * @param {String} data.description
 * @return {Promise<ResponseDto>} update a feedback
 * */
export function update(feedbackId: string, data: {
    userId: string;
    title: string;
    description: string;
}): Promise<ResponseDto>;
/**
 * delete a feedback
 *
 * @param {string} feedbackId - ID of the feedback
 * @param {Object} data - Data to delete feedback
 * @param {String} data.userId - ID of the user
 * @return {Promise<ResponseDto>} delete a feedback
 * */
export function destroy(feedbackId: string, data: {
    userId: string;
}): Promise<ResponseDto>;
