const {getMarketplace, createMarketplace} = require('./resources/marketPlace');

/**
 * Bridge class
 * @class
 * */
class Bridge {

    /**
     * Get the given marketplace
     *
     * @public
     * */
    getMarketPlace() {
        return getMarketplace;
    }

    /**
     * Create marketplace
     *
     * @public
     * */
    createMarketplace() {
        return createMarketplace;
    }

}

module.exports = Bridge;