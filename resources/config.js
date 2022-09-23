const axios = require('axios');

const axiosInterpretation = (serverToken) => {
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = `Bearer ${serverToken}`;
};

module.exports = {
    axiosInterpretation
};