export = Bridge;
/**
 * Bridge class
 * @class
 * */
declare class Bridge {
    /**
     * First method to call
     *
     * @param {String} [apiKey = null] - Api key of the user
     * @public
     * */
    public init(apiKey?: string): Promise<void>;
    /**
     * Server token
     *
     * @return {String} server token
     * @public
     * */
    public getToken(): string;
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
    #private;
}
import marketPlaceResources = require("./resources/marketPlace");
import webhookResources = require("./resources/webhook");
import scriptTagResources = require("./resources/scriptTag");
import cartResources = require("./resources/cart");
import customerResources = require("./resources/customer");
