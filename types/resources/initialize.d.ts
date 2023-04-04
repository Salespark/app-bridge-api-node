export = initialize;
/**
 * Get the server token
 *
 * @param {string | null} [apiKey = null] - Api key of the user
 * @return {Promise<string>} The fetched token from the server
 * */
declare function initialize(apiKey?: string | null): Promise<string>;
