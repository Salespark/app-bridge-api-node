import {ListDto, ResponseDto} from "../dto/types";

/**
 * Get the list of feedback
 * @public
 * @param {ListDto | null} data - Data to fetch the relevant feedback
 * @param {string} [data.startDate]
 * @param {string} [data.endDate]
 * @param {number} [data.pageNo]
 * @param {number} [data.limit]
 * @param {string} [data.select]
 * @return {Promise<ResponseDto>} List of feedback
 * */
export function list(data: ListDto | null): Promise<ResponseDto>;
/**
 * Create a feedback
 * @public
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
 * @public
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
 * @public
 * @param {string} feedbackId - ID of the feedback
 * @param {Object} data - Data to delete feedback
 * @param {String} data.userId - ID of the user
 * @return {Promise<ResponseDto>} delete a feedback
 * */
export function destroy(feedbackId: string, data: {
    userId: string;
}): Promise<ResponseDto>;
