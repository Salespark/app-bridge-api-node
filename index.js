const marketPlaceResources = require('./resources/marketPlace');
const webhookResources = require('./resources/webhook');
const scriptTagResources = require('./resources/scriptTag');
const cartResources = require('./resources/cart');
const customerResources = require('./resources/customer');
const featureResources = require('./resources/feature');
const featureCommentResources = require('./resources/featureComment');
const featureReactionResources = require('./resources/featureReaction');
const feedbackResources = require('./resources/feedback');
const feedbackCommentResources = require('./resources/feedbackComment');
const commentReactionResources = require('./resources/commentReaction');
const sessionResources = require('./resources/session');
const productResources = require('./resources/product');
const initialize = require('./resources/initialize');
const config = require('./resources/config');
const constants = require("./utils/constants");

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
     * @param {String | null} [apiKey = null] - Api key of the user
     * @public
     * */
    async init(apiKey = null) {
        this.#token = await initialize(apiKey);
        config.axiosInterpretation(this.#token);
    }

    /**
     * Initialized Pusher client
     * @public
     * @return {Pusher} - Pusher client instance
     * */
    pusher() {
        return config.pusherClient(this.#token);
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
     * @param {String | null} [apiKey = null] - Api key of the user
     * @return {Promise<String>} server token
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

    /**
     * Feature methods
     *
     * @public
     * */
    feature = featureResources;

    /**
     * Feature Comment methods
     *
     * @public
     * */
    featureComment = featureCommentResources;

    /**
     * Feature reaction methods
     *
     * @public
     * */
    featureReaction = featureReactionResources;

    /**
     * Feedback methods
     *
     * @public
     * */
    feedback = feedbackResources;

    /**
     * Feedback Comment methods
     *
     * @public
     * */
    feedbackComment = feedbackCommentResources;

    /**
     * Comment reaction methods
     *
     * @public
     * */
    commentReaction = commentReactionResources;

    /**
     * session methods
     *
     * @public
     * */
    session = sessionResources;

    /**
     * product methods
     *
     * @public
     * */
    product = productResources;

}

module.exports = Bridge;
