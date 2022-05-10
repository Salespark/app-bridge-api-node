const {postRequest} = require('../utils/requests');

/**
 * Get the server token
 *
 * @return {Promise} The fetched token from the server
 * */
exports.getServerToken = async () => {
    return postRequest('/token', {apiKey: 123456789});
};