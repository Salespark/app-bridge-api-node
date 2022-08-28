const {postRequest, putRequest} = require('../utils/requests');

/**
 * Get the list of marketplaces
 *
 * @param {Object} data - Data to fetch the relevant marketplace
 * @param {Object} data.payload - Data payload
 * @return {Promise} List of marketplaces
 * */
const list = async (data) => {
    const res = await postRequest('/marketplace/list', data);
    return res?.data;
};

/**
 * Get the given marketplace
 *
 * @param {String} shop - Name or url of the shop
 * @return {Promise} The fetched marketplace
 * */
const findByName = async (shop) => {
    const res = await postRequest('/marketplace', {marketplace: shop});
    return res?.data;
};

/**
 * Get the given marketplace
 *
 * @param {String} id - Marketplace id
 * @return {Promise} The fetched marketplace
 * */
const findById = async (id) => {
    const res = await postRequest('/marketplace', {marketplaceId: id});
    return res?.data;
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
    return res?.data;
};

/**
 * update a marketplace
 *
 * @param {Object} data - Data to create marketplace
 * @param {String} data.marketplaceId - Marketplace id
 * @param {String} [data.appToken] - Token of the shopify store
 * @param {Object} data.payload - Data payload
 * @return {Promise} update a marketplace
 * */
const update = async (data) => {
    const res = await putRequest('/marketplace/create', data);
    return res?.data;
};

module.exports = {
    list,
    findByName,
    findById,
    create,
    update,
};