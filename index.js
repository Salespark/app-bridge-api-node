const marketPlaceResources = require('./resources/marketPlace');
const webhookResources = require('./resources/webhook');
const scriptTagResources = require('./resources/scriptTag');
const cartResources = require('./resources/cart');
const initialize = require('./resources/initialize');

/**
 * Bridge class
 * @class
 * */
class Bridge {

    /**
     * Server token
     *
     * @private
     * */
    #token = '';

    /**
     * First method to call
     *
     * @param {String} [apiKey = null] - Api key of the user
     * */
    async init(apiKey = null) {
        this.#token = await initialize(apiKey);
    }

    /**
     * Server token
     *
     * @public
     * */
    getToken() {
        return this.#token;
    };

    /**
     * Marketplace methods
     *
     * @public
     * */
    marketplace = marketPlaceResources;

    /**
     * Webhook methods
     *
     * @public
     * */
    webhook = webhookResources;

    /**
     * Script tag methods
     *
     * @public
     * */
    scriptTag = scriptTagResources;

    /**
     * Cart methods
     *
     * @public
     * */

    cart = cartResources;

}

module.exports = Bridge;