const marketPlaceResources = require('./resources/marketPlace');
const webhookResources = require('./resources/webhook');
const scriptTagResources = require('./resources/scriptTag');
const cartResources = require('./resources/cart');
const customerResources = require('./resources/customer');
const feedbackResources = require('./resources/feedback');
const feedbackCommentResources = require('./resources/comment');
const feedbackReactionResources = require('./resources/feedbackReaction');
const commentReactionResources = require('./resources/commentReaction');
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
     * @param {String | null} [apiKey = null] - Api key of the user
     * @public
     * */
    async init(apiKey = null) {
        this.#token = initialize(apiKey);
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
     * @param {String | null} [apiKey = null] - Api key of the user
     * @return {String} server token
     * @public
     * */
    async generateToken(apiKey = null) {
        return initialize(apiKey);
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
     * Feedback methods
     *
     * @public
     * */
    feedback = feedbackResources;

    /**
     * Comment methods
     *
     * @public
     * */
    comment = feedbackCommentResources;

    /**
     * Feedback reaction methods
     *
     * @public
     * */
    feedbackReaction = feedbackReactionResources;

    /**
     * Comment reaction methods
     *
     * @public
     * */
    commentReaction = commentReactionResources;

}

module.exports = Bridge;