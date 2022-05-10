const {postRequest} = require('../utils/requests');

/**
 * Get the cart from the given marketplace
 *
 * @param {String} cartId - ID of the cart
 * @param {String} marketplaceId - Marketplace id
 * @return {Promise} The fetched cart from the marketplace
 * */
exports.getCartById = async (cartId, marketplaceId) => {
    return postRequest(`/carts/find/${cartId}`, {marketplaceId});
};

/**
 * Get the list of carts form the given marketplace
 *
 * @param {Object} data - Data to fetch the relevant carts
 * @param {String} data.marketplaceId - ID of the marketplace
 * @param {Object} data.payload - Data payload
 * @return {Promise} List of carts
 * */
exports.listCarts = (data) => {
    return postRequest(`/carts/list`, data);
};