const {postRequest} = require('../utils/requests');

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
    return res?.data;
};

/**
 * Get the cart from the given marketplace
 *
 * @param {String} cartId - ID of the cart
 * @param {String} marketplaceId - Marketplace id
 * @return {Promise} The fetched cart from the marketplace
 * */
const get = async (cartId, marketplaceId) => {
    const res = await postRequest(`/carts/find/${cartId}`, {marketplaceId});
    return res?.data;
};

/**
 * Get the cart aggregation from the given marketplace
 *
 * @param {Object} payload - Data to fetch the cart aggregation
 * @param {String} payload.marketplaceId - Marketplace id
 * @param {String} payload.query - Mongodb aggregate query(JSON.stringify)
 * @return {Promise} The fetched cart aggregation from the marketplace
 * */
const aggregate = async (payload) => {
    const res = await postRequest('/carts/aggregate', payload);
    return res?.data;
};

/**
 * Create cart  from the given marketplace
 *
 * @param {Object} payload - Data to Create cart and Customer
 * @param {Object} payload.payload - Data to Cart
 * @param {Object} payload.customer - Data to Customer
 * @param {string} payload.marketplaceId - Data to Marketplace id
 * @return {Promise} The Created cart from the marketplace
 * */
const create = async (payload) => {
    const res = await postRequest('/carts/create', payload);
    return res?.data;
};

module.exports = {
    list,
    get,
    aggregate,
    create
};
