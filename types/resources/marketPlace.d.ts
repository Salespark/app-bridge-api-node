/**
 * Get the given marketplace
 *
 * @param {String} shop - Name or url of the shop
 * @return {Promise} The fetched marketplace
 * */
export function get(shop: string): Promise<any>;
/**
 * Create a marketplace
 *
 * @param {Object} data - Data to create marketplace
 * @param {String} data.marketplace - Name or url of the marketplace
 * @param {String} data.appToken - Token of the shopify store
 * @param {Object} data.payload - Data payload
 * @return {Promise} Create a marketplace
 * */
export function create(data: {
    marketplace: string;
    appToken: string;
    payload: any;
}): Promise<any>;
/**
 * Get the list of marketplaces
 *
 * @return {Promise} List of marketplaces
 * */
export function list(): Promise<any>;
