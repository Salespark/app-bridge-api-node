const {postRequest} = require('../utils/requests');

/**
 * To get the given marketplace
 *
 * @param {String} shop
 * @return {Promise} The fetched marketplace
 * */
exports.getMarketplace = async (shop) => {
    return postRequest('/marketplace', {marketplace: shop});
};