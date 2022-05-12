const {postRequest} = require('../utils/requests');

/**
 * Create a script tag
 *
 * @param {Object} data - Data to create script tag
 * @param {String} data.marketplaceId - Marketplace id
 * @param {String} data.event - Event on which to load the script
 * @param {String} data.src - Source of the script
 * @return {Promise} Create a script tag
 * */
const create = async (data) => {
    return postRequest('/scripttags/create', data);
};


module.exports = {
    create
};