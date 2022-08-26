import {ResponseDto} from "../dto/types";

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
