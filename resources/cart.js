const {postRequest} = require('../utils/requests');

/**
 * Get the cart from the given marketplace
 *
 * @param {String} cartId - ID of the cart
 * @param {String} marketplaceId - Marketplace id
 * @return {Promise} The fetched cart from the marketplace
 * */
const get = async (cartId, marketplaceId) => {
    const res = await postRequest(`/carts/find/${cartId}`, {marketplaceId});
    return res?.data?.data;
};

/**
 * Get the list of carts form the given marketplace
 *
 * @param {Object} data - Data to fetch the relevant carts
 * @param {String} data.marketplaceId - ID of the marketplace
 * @param {Object} data.payload - Data payload
 * @return {Promise} List of carts
 * */
const list = async (data) => {
    const res = await postRequest(`/carts/list`, data);
    return res?.data?.data;
};

module.exports = {
    get,
    list
};