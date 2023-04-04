import {ResponseDto} from "../dto/types";

/**
 * Local List of webhook
 *
 * @param {Object} data - Data to List webhooks
 * @param {String} data.marketplaceId - Marketplace id
 * @param {Object} data.payload - Query payload
 * @param {number} data.payload.pageNo - Page no
 * @param {number} data.payload.limit - Document limit per page
 * @return {Promise<ResponseDto>} Local List of webhook
 * */
export function localList(data: {
    marketplaceId: string;
    payload: { pageNo: number | null, limit: number | null };
}): Promise<ResponseDto>;

/**
 * Create a webhook
 *
 * @param {Object} data - Data to create webhook
 * @param {String} data.marketplaceId - Marketplace id
 * @param {String} data.topic - Topic of the webhook
 * @param {String} data.address - Redirect url
 * @return {Promise<ResponseDto>} Create a webhook
 * */
export function create(data: {
    marketplaceId: string;
    topic: string;
    address: string;
}): Promise<ResponseDto>;

/**
 * Delete a webhook from database
 *
 * @param {Object} data - Data to delete webhook
 * @param {String} data.id - Webhook id
 * @param {String} data.marketplaceId - Marketplace id
 * @return {Promise<ResponseDto>} delete a webhook
 * */
export function deleteFromLocal(data: {
    id: string;
    marketplaceId: string;
}): Promise<ResponseDto>;
