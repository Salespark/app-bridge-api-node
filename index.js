const {getMarketplace, createMarketplace, listMarketplaces} = require('./resources/marketPlace');

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

    /**
     * Create marketplace
     *
     * @public
     * */
    listMarketplaces() {
        return listMarketplaces;
    }

}

module.exports = Bridge;