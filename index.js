const {getMarketplace, createMarketplace, listMarketplace} = require('./resources/marketPlace');
const {createWebhook} = require('./resources/webhook');
const {createScriptTag} = require('./resources/scriptTag');
const {getCartById, listCarts} = require('./resources/cart');

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

    /**
     * Cart methods
     *
     * @public
     * */
    cart = {
        get: getCartById,
        list: listCarts
    };

}

module.exports = Bridge;