const {postRequest} = require('../utils/requests');

/**
 * Get the given marketplace
 *
 * @param {String} shop - Name or url of the shop
 * @return {Promise} The fetched marketplace
 * */
const findByName = async (shop) => {
    const res = await postRequest('/marketplace', {marketplace: shop});
    return res?.data?.data;
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
    const res = await postRequest('/marketplace/create', data);
    return res?.data?.data;
};

/**
 * Get the list of marketplaces
 *
 * @return {Promise} List of marketplaces
 * */
const list = async () => {
    const res = await postRequest('/marketplace/list', {payload: {status: 'active'}});
    return res?.data?.data;
};

module.exports = {
    findByName,
    create,
    list
};