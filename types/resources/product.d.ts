import { ResponseDto } from "../dto/types";

/**
 * Get the list of products form the given marketplace
 *
 * @param {Object} data - Data to fetch the relevant products
 * @param {String} data.marketplaceId - ID of the marketplace
 * @param {Object} data.payload - Data payload
 * @param {number} [data.payload.pageNo]
 * @param {number} [data.payload.limit]
 * @param {string} [data.payload.select]
 * @param {string} [data.payload.where] - json string of mongo query
 * @param {string} [data.payload.sort]
 * @param {string} [data.payload.select] - collection keys
 * @return {Promise<ResponseDto>} List of products
 * */
export function list(data: {
    marketplaceId: string;
    payload: {
        pageNo?: number;
        limit?: number;
        where?: string;
        sort?: string;
        select?: string;
    };
}): Promise<ResponseDto>;
/**
 * Get the product from the given marketplace
 *
 * @param {String} productId - ID of the product
 * @param {String} marketplaceId - Marketplace id
 * @return {Promise<ResponseDto>} The fetched product from the marketplace
 * */
export function get(productId: string, marketplaceId: string): Promise<ResponseDto>;
/**
 * Get the products aggregation from the given marketplace
 *
 * @param {Object} payload - Data to fetch the products
 * @param {String} payload.marketplaceId - Marketplace id
 * @param {String} payload.query - Mongodb aggregate query(JSON.stringify)
 * @return {Promise<ResponseDto>} The fetched products from the marketplace
 * */
export function aggregate(payload: {
    marketplaceId: string;
    query: string;
}): Promise<ResponseDto>;
/**
 * Create/Update product from the given marketplace
 *
 * @param {Object} data - Data to create/update Product
 * @param {String} data.marketplaceId - - Marketplace id
 * @param {Object} data.payload
 * @param {String} data.payload.id - Platform product id e.g shopify product id
 * @return {Promise<ResponseDto>} Created/Updated product
 * */
export function createOrUpdate(data: {
    marketplaceId: string;
    payload: {
        id: string,
        [key: string]: any;
    }
}): Promise<ResponseDto>;
