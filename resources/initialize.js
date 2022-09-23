const authResource = require('./auth');

const initialize = async (apiKey) => {
    const tokenRes = await authResource.getToken(apiKey);
    return tokenRes?.data?.data?.token || '';
};

module.exports = initialize;