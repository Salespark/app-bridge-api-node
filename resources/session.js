const {getRequest, postRequest, putRequest, deleteRequest} = require('../utils/requests');

/**
 * Find by session id
 * @public
 * @param {String} sessionId
 * @param {String} marketplaceId
 * @return {Promise} Session detail
 * */
const findBySessionId = async (sessionId,marketplaceId) => {
    const res = await getRequest(`/session/find-by-sessionId/${sessionId}/${marketplaceId}`, null);
    return res?.data
};

/**
 * Create a session
 * @public
 * @param {Object} data - Data to create session
 * @param {String} data.marketplaceId
 * @param {String} data.sessionId
 * @param {String} data.content
 * @return {Promise} Create a session
 * */
const create = async (data) => {
    const res = await postRequest('/session/create', data);
    return res?.data
};

/**
 * update a session
 * @public
 * @param {string} id - PK of the session
 * @param {Object} data - Data to update session
 * @param {String} data.marketplaceId
 * @param {String} data.sessionId
 * @param {String} data.content
 * @return {Promise} update a session
 * */
const update = async (id, data) => {
    const res = await putRequest(`/session/update/${id}`, data);
    return res?.data;
};

/**
 * delete a session by sessionId
 * @public
 * @param {string} sessionId - ID of the session
 * @param {String} marketplaceId
 * @return {Promise} delete a session
 * */
const deleteBySessionId = async (sessionId, marketplaceId) => {
    const res = await deleteRequest(`/session/delete-by-session/${sessionId}/${marketplaceId}`, {});
    return res?.data;
};

/**
 * delete a session by marketplaceId
 * @public
 * @param {String} marketplaceId
 * @return {Promise} delete a session
 * */
const deleteByMarketplaceId = async (marketplaceId) => {
    const res = await deleteRequest(`/session/delete-by-marketplace/${marketplaceId}`, {});
    return res?.data;
};

module.exports = {
    create,
    update,
    findBySessionId,
    deleteBySessionId,
    deleteByMarketplaceId
};