import { ResponseDto } from "../dto/types";

/**
 * Get the list of marketplaces
 *
 * @return {Promise<ResponseDto>} List of marketplaces
 * */
export function list(): Promise<ResponseDto>;
/**
 * Get the given marketplace
 *
 * @param {String} shop - Name or url of the shop
 * @return {Promise<ResponseDto>} The fetched marketplace
 * */
export function findByName(shop: string): Promise<ResponseDto>;
/**
 * Create a marketplace
 *
 * @param {Object} data - Data to create marketplace
 * @param {String} data.marketplace - Name or url of the marketplace
 * @param {String} data.appToken - Token of the shopify store
 * @param {Object} data.payload - Data payload
 * @return {Promise<ResponseDto>} Create a marketplace
 * */
export function create(data: {
    marketplace: string;
    appToken: string;
    payload: any;
}): Promise<ResponseDto>;
/**
 * update a marketplace
 *
 * @param {Object} data - Data to create marketplace
 * @param {String} data.marketplaceId - Marketplace id
 * @param {String} [data.appToken] - Token of the shopify store
 * @param {Object} data.payload - Data payload
 * @return {Promise<ResponseDto>} update a marketplace
 * */
export function update(data: {
    marketplaceId: string;
    appToken?: string;
    payload: any;
}): Promise<ResponseDto>;
