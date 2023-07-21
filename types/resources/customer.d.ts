import { ResponseDto } from "../dto/types";
/**
 * Get the list of customers form the given marketplace
 *
 * @param {Object} data - Data to fetch the relevant carts
 * @param {String} data.marketplaceId - ID of the marketplace
 * @param {Object} data.payload - Data payload
 * @return {Promise<ResponseDto>} List of customers
 * */
export function list(data: {
    marketplaceId: string;
    payload: any;
}): Promise<ResponseDto>;
/**
 * Get the customer from the given marketplace
 *
 * @param {Object} data - Data to fetch the relevant customer
 * @param {String} data.id - ID of the customer
 * @param {String} data.marketplaceId - Marketplace id
 * @return {Promise<ResponseDto>} The fetched cart from the marketplace
 * */
export function getById(data: {
    id: string;
    marketplaceId: string;
}): Promise<ResponseDto>;
/**
 * Create a customer
 *
 * @param {Object} data - Data to create customer
 * @param {String} data.marketplaceId - ID of the marketplace
 * @param {String} data.email - Email of the customer
 * @param {Object} data.payload - Data payload
 * @return {Promise<ResponseDto>} Create a customer
 * */
export function create(data: {
    marketplaceId: string;
    email: string;
    payload: any;
}): Promise<ResponseDto>;
/**
 * update a customer
 *
 * @param {Object} data - Data to create customer
 * @param {String} data.marketplaceId - ID of the marketplace
 * @param {String} data.email - Email of the customer
 * @param {Object} data.payload - Data payload
 * @return {Promise<ResponseDto>} update a customer
 * */
export function update(data: {
    marketplaceId: string;
    email: string;
    payload: any;
}): Promise<ResponseDto>;

/**
 * Delete customer from the given marketplace and customer id
 *
 * @param {Object} data - Data to delete customer
 * @param {String} data.marketplaceId - ID of the marketplace
 * @param {String} data.customerId - ID of the customer
 * @return {Promise<ResponseDto>}
 * */
export function deleteCustomer(data: {
    marketplaceId: string;
    customerId: string;
}): Promise<ResponseDto>;
