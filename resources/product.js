const {postRequest} = require('../utils/requests');

/**
 * Get the list of products form the given marketplace
 *
 * @param {Object} data - Data to fetch the relevant products
 * @param {String} data.marketplaceId - ID of the marketplace
 * @param {Object} data.payload - Data payload
 * @param {number} [data.payload.pageNo]
 * @param {number} [data.payload.limit]
 * @param {string} [data.payload.where] - json string of mongo query
 * @param {string} [data.payload.sort]
 * @param {string} [data.payload.select] - collection keys
 * @return {Promise} List of products
 * */
const list = async (data) => {
    const res = await postRequest(`/products/list`, data);
    return res?.data;
};

/**
 * Get the product from the given marketplace
 *
 * @param {String} productId - ID of the product
 * @param {String} marketplaceId - Marketplace id
 * @return {Promise} The fetched product from the marketplace
 * */
const get = async (productId, marketplaceId) => {
    const res = await postRequest(`/products/find/${productId}`, {marketplaceId});
    return res?.data;
};

/**
 * Get the products aggregation from the given marketplace
 *
 * @param {Object} payload - Data to fetch the products
 * @param {String} payload.marketplaceId - Marketplace id
 * @param {String} payload.query - Mongodb aggregate query(JSON.stringify)
 * @return {Promise} The fetched products from the marketplace
 * */
const aggregate = async (payload) => {
    const res = await postRequest('/products/aggregate', payload);
    return res?.data;
};

/**
 * Create/Update product from the given marketplace
 *
 * @param {Object} data - Data to create/update Product
 * @param {String} data.marketplaceId - - Marketplace id
 * @param {Object} data.payload
 * @param {String} data.payload.id - Platform product id e.g shopify product id
 * @param {[key: string]: any} data.payload
 * @return {Promise} Created/Updated product
 * */
const createOrUpdate = async (data) => {
    const res = await postRequest('/products/create', data);
    return res?.data;
};

module.exports = {
    list,
    get,
    aggregate,
    createOrUpdate
};
