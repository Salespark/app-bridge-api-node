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
     * @public
     * */
    token = '';

    /**
     * Constructor of the class
     *
     * @constructor
     * */
    async constructor() {
        this.token = await initialize();
    }

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