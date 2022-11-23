import {ResponseDto} from "../dto/types";

/**
 * Get the list of comment
 *
 * @param {string} feedbackId - ID of the feedback
 * @param {Object | null} data - Data to fetch the relevant feedback
 * @return {Promise<ResponseDto>>} List of comment
 * */

export function list(feedbackId: string, data: any | null): Promise<ResponseDto>;
/**
 * Create a comment
 *
 * @param {Object} data - Data to create comment
 * @param {String} data.userId - ID of the user
 * @param {String} data.feedbackId
 * @param {String} data.comment
 * @param {String | null} data.parentId - comment id of parent comment
 * @return {Promise<ResponseDto>} Create a comment
 * */
export function create(data: {
    userId: string;
    feedbackId: string;
    comment: string;
    parentId: string | null;
}): Promise<ResponseDto>;
/**
 * update a comment
 *
 * @param {string} commentId - ID of the comment
 * @param {Object} data - Data to update comment
 * @param {String} data.userId - ID of the user
 * @param {String} data.comment
 * @return {Promise<ResponseDto>} update a comment
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
 * @return {Promise<ResponseDto>} delete a comment
 * */
export function destroy(commentId: string, data: {
    userId: string;
}): Promise<ResponseDto>;
