import {ListDto, ResponseDto} from "../dto/types";
/**
 * Get the list of comment
 * @public
 * @param {string} featureId - ID of the feature
 * @param {ListDto | null} data - Data to fetch the relevant feature
 * @param {number} [data.pageNo]
 * @param {number} [data.limit]
 * @param {string} [data.select]
 * @param {string} [data.where] -- json string of mongo query
 * @param {string} [data.sort]
 * @return {Promise<ResponseDto>} List of comment
 * */
export function list(featureId: string, data: ListDto | null): Promise<ResponseDto>;
/**
 * Create a comment
 *
 * @param {Object} data - Data to create comment
 * @param {String} data.userId - ID of the user
 * @param {String} data.featureId
 * @param {String} data.comment
 * @param {String | null} data.parentId - comment id of parent comment
 * @return {Promise<ResponseDto>} Create a comment
 * */
export function create(data: {
    userId: string;
    featureId: string;
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
