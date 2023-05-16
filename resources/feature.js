const {getRequest, postRequest, putRequest, deleteRequest} = require('../utils/requests');

/**
 * Get the list of feature
 * @public
 * @param {Object | null} data - Data to fetch the relevant feature
 * @param {number} [data.pageNo]
 * @param {number} [data.limit]
 * @param {string} [data.select]
 * @param {string} [data.where] -- json string of mongo query
 * @param {string} [data.sort]
 * @return {Promise} List of feature
 * */
const list = async (data) => {
    const res = await postRequest(`/feature/list`, data);
    return res?.data;
};

/**
 * Create a feature
 * @public
 * @param {Object} data - Data to create feature
 * @param {String} data.userId - ID of the user
 * @param {String} data.title
 * @param {String} data.description
 * @return {Promise} Create a feature
 * */
const create = async (data) => {
    const res = await postRequest('/feature/create', data);
    return res?.data
};

/**
 * update a feature
 * @public
 * @param {string} featureId - ID of the feature
 * @param {Object} data - Data to update feature
 * @param {String} data.userId - ID of the user
 * @param {String} data.title
 * @param {String} data.description
 * @return {Promise} update a feature
 * */
const update = async (featureId, data) => {
    const res = await putRequest(`/feature/update/${featureId}`, data);
    return res?.data;
};

/**
 * delete a feature
 * @public
 * @param {string} featureId - ID of the feature
 * @param {Object} data - Data to delete feature
 * @param {String} data.userId - ID of the user
 * @return {Promise} delete a feature
 * */
const destroy = async (featureId, data) => {
    const res = await deleteRequest(`/feature/delete/${featureId}`, data);
    return res?.data;
};

module.exports = {
    list,
    create,
    update,
    destroy
};