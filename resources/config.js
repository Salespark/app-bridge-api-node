const axios = require('axios');
const PusherClient = require('pusher-js');
const constants = require("../utils/constants");

/**
 * Set axios header's
 *
 * @param {string} serverToken - Server Authorization token
 * */

const axiosInterpretation = (serverToken) => {
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = `Bearer ${serverToken}`;
};

/**
 * Initialize the Pusher Client
 *
 * @param {string} serverToken - Server Authorization token
 * @return {Pusher} Pusher client instance
 * */
const pusherClient = (serverToken) => {
    const pusherClient = new PusherClient(process.env.PUSHER_APP_KEY, {
        cluster: process.env.PUSHER_APP_CLUSTER,
        forceTLS: true,
        userAuthentication: {
            transport: 'ajax',
            endpoint: `${constants.url()}/broadcast/auth-user`,
            headers: { 'Authorization': `Bearer ${serverToken}` },
        },
        channelAuthorization: {
            transport: 'ajax',
            endpoint: `${constants.url()}/broadcast/auth-channel`,
            headers: { 'Authorization': `Bearer ${serverToken}` },
        }
    });
    pusherClient.signin();
    return pusherClient;
}

module.exports = {
    axiosInterpretation,
    pusherClient
};