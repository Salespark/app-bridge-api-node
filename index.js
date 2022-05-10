const {getMarketplace, createMarketplace, listMarketplace} = require('./resources/marketPlace');
const {createWebhook} = require('./resources/webhook');

/**
 * Bridge class
 * @class
 * */
class Bridge {

    /**
     * Marketplace methods
     *
     * @public
     * */
    marketplace = {
        get: getMarketplace,
        create: createMarketplace,
        list: listMarketplace
    };

    /**
     * Webhook methods
     *
     * @public
     * */
    webhook = {
        create: createWebhook
    };

}

module.exports = Bridge;