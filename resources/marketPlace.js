const {postRequest} = require('../utils/requests');

exports.getMarketplace = async (shop) => {
    return postRequest('/marketplace', {marketplace: shop});
};