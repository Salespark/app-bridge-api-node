const axios = require('axios');
const {getServerToken} = require('./auth');

const initialize = async () => {

    // fetching the server token
    const tokenRes = await getServerToken();
    const serverToken = tokenRes?.data?.data?.token || '';

    // axios configs
    axios.defaults.headers.common['Accept'] = 'application/json';
    if (serverToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${serverToken}`;
    }

    return serverToken;

};

module.exports = initialize;