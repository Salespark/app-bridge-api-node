import marketPlaceResources = require("./resources/marketPlace");
import webhookResources = require("./resources/webhook");
import scriptTagResources = require("./resources/scriptTag");
import cartResources = require("./resources/cart");
import customerResources = require("./resources/customer");
import feedbackResources = require("./resources/feedback");
import feedbackCommentResources = require("./resources/comment");
import feedbackReactionResources = require("./resources/feedbackReaction");
import commentReactionResources = require("./resources/commentReaction");
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
    public getConstants(): {
        URL: string;
    };
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
     * Feedback methods
     *
     * @public
     * */
    public feedback: typeof feedbackResources;
    /**
     * Comment methods
     *
     * @public
     * */
    public comment: typeof feedbackCommentResources;
    /**
     * Feedback reaction methods
     *
     * @public
     * */
    public feedbackReaction: typeof feedbackReactionResources;
    /**
     * Comment reaction methods
     *
     * @public
     * */
    public commentReaction: typeof commentReactionResources;
}
export = Bridge;
