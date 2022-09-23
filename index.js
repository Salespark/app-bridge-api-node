const marketPlaceResources = require('./resources/marketPlace');
const webhookResources = require('./resources/webhook');
const scriptTagResources = require('./resources/scriptTag');
const cartResources = require('./resources/cart');
const customerResources = require('./resources/customer');
const initialize = require('./resources/initialize');
const config = require('./resources/config');
const {constants} = require("./utils/constants");

/**
 * Bridge class
 * @class
 * */
class Bridge {

    /**
     * Server token
     * @private
     * */
    #token = '';

    /**
     * First method to call
     *
     * @param {String} [apiKey = null] - Api key of the user
     * @public
     * */
    async init(apiKey = null) {
        this.#token = await initialize(apiKey);
        config.axiosInterpretation(this.#token);
    }

    /**
     * Server token
     *
     * @return {String} server token
     * @public
     * */
    getToken() {
        return this.#token;
    };

    /**
     * Generate Server token
     *
     * @return {String} server token
     * @public
     * */
    async generateToken(apiKey = null) {
        return await initialize(apiKey);
    };

    /**
     * constants
     * @public
     * */
    getConstants() {
        return constants;
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

    /**
     * Customer methods
     *
     * @public
     * */
    customer = customerResources;

}

module.exports = Bridge;