/**
 * Set Server entry point
 *
 * @return {String} Server base url
 * */
const url = () => {
    return process.env.BRIDGE_URL ?? `https://webhooksapi.salesparkapps.com`;
};

module.exports = {
    url
}