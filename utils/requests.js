const axios = require('axios').default;
const {constants} = require('./constants');
const {AxiosResponse} = require("axios");

/**
 * To send the http post requests
 *
 * @param {String} path
 * @param {*} data
 * @return {Promise<AxiosResponse>} The response from the API
 * */
const postRequest = (path, data) => {
    const url = constants.URL + path;
    return axios.post(url, data).catch((err) => {
        if (err.response) {
            throw new Error(`Error occurred while hitting this route "${err.config.url}": ${err.response.data.message}`);
        } else {
            throw new Error('Something went wrong. Try again later!');
        }
    });
};

module.exports = {postRequest};