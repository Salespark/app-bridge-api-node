const {postRequest} = require('../utils/requests');

/**
 * Local List of webhook
 *
 * @param {Object} data - Data to List webhooks
 * @param {String} data.marketplaceId - Marketplace id
 * @param {Object} data.payload - Query payload
 * @param {number} data.payload.pageNo - Page no
 * @param {number} data.payload.limit - Document limit per page
 * @return {Promise} Local List of webhook
 * */
const localList = async (data) => {
    const res = postRequest('/webhook/local-list', data);
    return res?.data;
};

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

/**
 * Delete a webhook from database
 *
 * @param {Object} data - Data to delete webhook
 * @param {String} data.id - Webhook id
 * @param {String} data.marketplaceId - Marketplace id
 * @return {Promise} Create a webhook
 * */
const deleteFromLocal = async (data) => {
    const res = postRequest('/webhook/delete', data);
    return res?.data;
};

module.exports = {
    localList,
    create,
    deleteFromLocal
};