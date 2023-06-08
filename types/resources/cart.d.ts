import { ResponseDto } from "../dto/types";

/**
 * Get the list of carts form the given marketplace
 *
 * @param {Object} data - Data to fetch the relevant carts
 * @param {String} data.marketplaceId - ID of the marketplace
 * @param {Object} data.payload - Data payload
 * @return {Promise<ResponseDto>} List of carts
 * */
export function list(data: {
    marketplaceId: string;
    payload: any;
}): Promise<ResponseDto>;
/**
 * Get the cart from the given marketplace
 *
 * @param {String} cartId - ID of the cart
 * @param {String} marketplaceId - Marketplace id
 * @return {Promise<ResponseDto>} The fetched cart from the marketplace
 * */
export function get(cartId: string, marketplaceId: string): Promise<ResponseDto>;
/**
 * Get the cart aggregation from the given marketplace
 *
 * @param {Object} payload - Data to fetch the cart aggregation
 * @param {String} payload.marketplaceId - Marketplace id
 * @param {String} payload.query - Mongodb aggregate query(JSON.stringify)
 * @return {Promise<ResponseDto>} The fetched cart aggregation from the marketplace
 * */
export function aggregate(payload: {
    marketplaceId: string;
    query: string;
}): Promise<ResponseDto>;
/**
 * Create cart from the given marketplace
 *
 * @param {Object} payload - Data to Create cart and Customer
 * @param {Object} payload.payload - Data to Cart
 * @param {Object} payload.customer - Data to Customer
 * @param {string} payload.marketplaceId - Data to Marketplace id
 * @return {Promise<ResponseDto>} The Created cart from the marketplace
 * */
export function create(payload: {
    payload: object;
    customer: object;
    marketplaceId: string;
}): Promise<ResponseDto>;
