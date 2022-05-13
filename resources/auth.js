const {postRequest} = require('../utils/requests');

/**
 * Get the server token
 *
 * @param {String} [apiKey] - Api key of the user
 * @return {Promise} The fetched token from the server
 * */
const getToken = async (apiKey) => {
    const key = apiKey ? apiKey : process.env.BRIDGE_API_KEY;
    return postRequest('/token', {apiKey: key});
};

module.exports = {
    getToken
};