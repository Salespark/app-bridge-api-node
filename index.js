const {getMarketplace, createMarketplace, listMarketplace} = require('./resources/marketPlace');
const {createWebhook} = require('./resources/webhook');
const {createScriptTag} = require('./resources/scriptTag');

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

    /**
     * Script tag methods
     *
     * @public
     * */
    scriptTag = {
        create: createScriptTag
    };

}

module.exports = Bridge;