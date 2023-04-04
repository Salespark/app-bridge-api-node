import {ListDto, ResponseDto} from "../dto/types";
/**
 * Get the list of feature
 * @public
 * @param {ListDto | null} data - Data to fetch the relevant feature
 * @param {string} [data.startDate]
 * @param {string} [data.endDate]
 * @param {number} [data.pageNo]
 * @param {number} [data.limit]
 * @param {string} [data.select]
 * @return {Promise<ResponseDto>} List of feature
 * */
export function list(data: ListDto | null): Promise<ResponseDto>;
/**
 * Create a feature
 * @public
 * @param {Object} data - Data to create feature
 * @param {String} data.userId - ID of the user
 * @param {String} data.title
 * @param {String} data.description
 * @return {Promise<ResponseDto>} Create a feature
 * */
export function create(data: {
    userId: string;
    title: string;
    description: string;
}): Promise<ResponseDto>;
/**
 * update a feature
 * @public
 * @param {string} featureId - ID of the feature
 * @param {Object} data - Data to update feature
 * @param {String} data.userId - ID of the user
 * @param {String} data.title
 * @param {String} data.description
 * @return {Promise<ResponseDto>} update a feature
 * */
export function update(featureId: string, data: {
    userId: string;
    title: string;
    description: string;
}): Promise<ResponseDto>;
/**
 * delete a feature
 * @public
 * @param {string} featureId - ID of the feature
 * @param {Object} data - Data to delete feature
 * @param {String} data.userId - ID of the user
 * @return {Promise<ResponseDto>} delete a feature
 * */
export function destroy(featureId: string, data: {
    userId: string;
}): Promise<ResponseDto>;
