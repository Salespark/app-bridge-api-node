import {ListDto, ResponseDto} from "../dto/types";
/**
 * Get the list of comment
 *
 * @param {string} feedbackId - ID of the feedback
 * @param {ListDto | null} data - Data to fetch the relevant feedback
 * @param {string} [data.startDate]
 * @param {string} [data.endDate]
 * @param {number} [data.pageNo]
 * @param {number} [data.limit]
 * @param {string} [data.select]
 * @return {Promise} List of comment
 * */
export function list(feedbackId: string, data: ListDto | null): Promise<ResponseDto>;
/**
 * Create a comment
 *
 * @param {Object} data - Data to create comment
 * @param {String} data.userId - ID of the user
 * @param {String} data.feedbackId
 * @param {String} data.comment
 * @param {String | null} [data.parentId] - comment id of parent comment
 * @return {Promise} Create a comment
 * */
export function create(data: {
    userId: string;
    feedbackId: string;
    comment: string;
    parentId?: string | null;
}): Promise<ResponseDto>;
/**
 * update a comment
 *
 * @param {string} commentId - ID of the comment
 * @param {Object} data - Data to update comment
 * @param {String} data.userId - ID of the user
 * @param {String} data.comment
 * @return {Promise} update a comment
 * */
export function update(commentId: string, data: {
    userId: string;
    comment: string;
}): Promise<ResponseDto>;
/**
 * delete a comment
 *
 * @param {string} commentId - ID of the comment
 * @param {Object} data - Data to delete comment
 * @param {String} data.userId - ID of the user
 * @return {Promise} delete a comment
 * */
export function destroy(commentId: string, data: {
    userId: string;
}): Promise<ResponseDto>;