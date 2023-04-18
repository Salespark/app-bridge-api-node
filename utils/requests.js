const axios = require('axios').default;
const {AxiosResponse} = require("axios");
const constants = require("./constants");

/**
 * To send the http get requests
 *
 * @param {String} path
 * @param {Object | null} data
 * @return {Promise<AxiosResponse>} The response from the API
 * */
const getRequest = (path, data) => {
    const url = constants.url() + path;
    return axios.get(url, {params: data}).catch((err) => {
        if (err.response) {
            throw new Error(`Error occurred while hitting this route "${err.config.url}": ${err.response.data.message}`);
        } else {
            throw new Error('Something went wrong. Try again later!');
        }
    });
};

/**
 * To send the http post requests
 *
 * @param {String} path
 * @param {*} data
 * @return {Promise<AxiosResponse>} The response from the API
 * */
const postRequest = (path, data) => {
    const url = constants.url() + path;
    return axios.post(url, data).catch((err) => {
        if (err.response) {
            throw new Error(`Error occurred while hitting this route "${err.config.url}": ${err.response.data.message}`);
        } else {
            throw new Error('Something went wrong. Try again later!');
        }
    });
};

/**
 * To send the http put requests
 *
 * @param {String} path
 * @param {*} data
 * @return {Promise<AxiosResponse>} The response from the API
 * */
const putRequest = (path, data) => {
    const url = constants.url() + path;
    return axios.put(url, data).catch((err) => {
        if (err.response) {
            throw new Error(`Error occurred while hitting this route "${err.config.url}": ${err.response.data.message}`);
        } else {
            throw new Error('Something went wrong. Try again later!');
        }
    });
};

/**
 * To send the http delete requests
 *
 * @param {String} path
 * @param {*} data
 * @return {Promise<AxiosResponse>} The response from the API
 * */
const deleteRequest = (path, data) => {
    const url = constants.url() + path;
    return axios.delete(url, {data: data}).catch((err) => {
        if (err.response) {
            throw new Error(`Error occurred while hitting this route "${err.config.url}": ${err.response.data.message}`);
        } else {
            throw new Error('Something went wrong. Try again later!');
        }
    });
};


module.exports = {getRequest, postRequest, putRequest, deleteRequest};