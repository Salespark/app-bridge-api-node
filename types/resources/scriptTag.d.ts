/**
 * Create a script tag
 *
 * @param {Object} data - Data to create script tag
 * @param {String} data.marketplaceId - Marketplace id
 * @param {String} data.event - Event on which to load the script
 * @param {String} data.src - Source of the script
 * @return {Promise} Create a script tag
 * */
export function create(data: {
    marketplaceId: string;
    event: string;
    src: string;
}): Promise<any>;
