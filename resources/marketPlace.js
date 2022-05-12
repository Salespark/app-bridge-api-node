const {postRequest} = require('../utils/requests');

/**
 * Get the given marketplace
 *
 * @param {String} shop - Name or url of the shop
 * @return {Promise} The fetched marketplace
 * */
const get = async (shop) => {
    return postRequest('/marketplace', {marketplace: shop});
};

/**
 * Create a marketplace
 *
 * @param {Object} data - Data to create marketplace
 * @param {String} data.marketplace - Name or url of the marketplace
 * @param {String} data.appToken - Token of the shopify store
 * @param {Object} data.payload - Data payload
 * @return {Promise} Create a marketplace
 * */
const create = async (data) => {
    return postRequest('/marketplace/create', data);
};

/**
 * Get the list of marketplaces
 *
 * @return {Promise} List of marketplaces
 * */
const list = async () => {
    return postRequest('/marketplace/list', {payload: {status: 'active'}});
};

module.exports = {
    get,
    create,
    list
};