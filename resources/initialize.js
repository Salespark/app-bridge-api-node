const authResource = require('./auth');

/**
 * Get the server token
 *
 * @param {string | null} [apiKey = null] - Api key of the user
 * @return {Promise<string>} The fetched token from the server
 * */

const initialize = async (apiKey) => {
    const tokenRes = await authResource.getToken(apiKey);
    return tokenRes?.data?.data?.token || '';
};

module.exports = initialize;