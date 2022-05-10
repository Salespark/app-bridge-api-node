const {get, create, list} = require('./resources/marketPlace');

/**
 * Bridge class
 * @class
 * */
class Bridge {

    /**
     * Marketplace methods
     *
     * @public
     * */
    marketplace = {
        get,
        create,
        list
    };

}

module.exports = Bridge;