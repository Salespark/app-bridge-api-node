const axios = require('axios');
const authResource = require('./auth');

const initialize = async (apiKey) => {

    // fetching the server token
    const tokenRes = await authResource.getToken(apiKey);
    const serverToken = tokenRes?.data?.data?.token || '';

    // axios configs
    axios.defaults.headers.common['Accept'] = 'application/json';
    if (serverToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${serverToken}`;
    }

    return serverToken;

};

module.exports = initialize;