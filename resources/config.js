const axios = require('axios');

/**
 * Set axios header's
 *
 * @param {string} serverToken - Server Authorization token
 * */

const axiosInterpretation = (serverToken) => {
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = `Bearer ${serverToken}`;
};

module.exports = {
    axiosInterpretation
};