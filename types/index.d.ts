import constants = require("./utils/constants");
import marketPlaceResources = require("./resources/marketPlace");
import webhookResources = require("./resources/webhook");
import scriptTagResources = require("./resources/scriptTag");
import cartResources = require("./resources/cart");
import customerResources = require("./resources/customer");
import featureResources = require("./resources/feature");
import featureCommentResources = require("./resources/featureComment");
import featureReactionResources = require("./resources/featureReaction");
import feedbackResources = require("./resources/feedback");
import feedbackCommentResources = require("./resources/feedbackComment");
import commentReactionResources = require("./resources/commentReaction");
import sessionResources = require("./resources/session");
import productResources = require("./resources/product");
import Pusher from "pusher-js";
/**
 * Bridge class
 * @class
 * */
declare class Bridge {
    /**
     * First method to call
     *
     * @param {String | null} [apiKey = null] - Api key of the user
     * @public
     * */
    public init(apiKey?: string | null): Promise<void>;
    /**
     * Initialized Pusher client
     * @public
     * @return {Pusher} - Pusher client instance
     * */
    public pusher(): Pusher;
    /**
     * Server token
     *
     * @return {String} server token
     * @public
     * */
    public getToken(): string;
    /**
     * Generate Server token
     *
     * @param {String | null} [apiKey = null] - Api key of the user
     * @return {Promise<String>} server token
     * @public
     * */
    public generateToken(apiKey?: string | null): Promise<string>;
    /**
     * constants
     * @public
     * */
    public getConstants(): typeof constants;
    /**
     * Marketplace methods
     *
     * @public
     * */
    public marketplace: typeof marketPlaceResources;
    /**
     * Webhook methods
     *
     * @public
     * */
    public webhook: typeof webhookResources;
    /**
     * Script tag methods
     *
     * @public
     * */
    public scriptTag: typeof scriptTagResources;
    /**
     * Cart methods
     *
     * @public
     * */
    public cart: typeof cartResources;
    /**
     * Customer methods
     *
     * @public
     * */
    public customer: typeof customerResources;
    /**
     * Feature methods
     *
     * @public
     * */
    public feature: typeof featureResources;
    /**
     * Feature Comment methods
     *
     * @public
     * */
    public featureComment: typeof featureCommentResources;
    /**
     * Feature reaction methods
     *
     * @public
     * */
    public featureReaction: typeof featureReactionResources;
    /**
     * Feedback methods
     *
     * @public
     * */
    public feedback: typeof feedbackResources;
    /**
     * Feedback Comment methods
     *
     * @public
     * */
    public feedbackComment: typeof feedbackCommentResources;
    /**
     * Comment reaction methods
     *
     * @public
     * */
    public commentReaction: typeof commentReactionResources;
    /**
     * session methods
     *
     * @public
     * */
    public session: typeof sessionResources;
    /**
     * product methods
     *
     * @public
     * */
    public product: typeof productResources;
}
export = Bridge;
