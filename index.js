const {getMarketplace} = require('./resources/marketPlace');

/**
 * Bridge class
 * @class
 * */
class Bridge {

    authToken = '';

    getMarketPlace() {
        return getMarketplace;
    }

}

module.exports = Bridge;