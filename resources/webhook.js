const {postRequest} = require('../utils/requests');

/**
 * Create a webhook
 *
 * @param {Object} data - Data to create webhook
 * @param {String} data.marketplaceId - Marketplace id
 * @param {String} data.topic - Topic of the webhook
 * @param {String} data.address - Redirect url
 * @return {Promise} Create a webhook
 * */
const create = async (data) => {
    const res = postRequest('/webhook/create', data);
    return res?.data;
};

module.exports = {
    create
};