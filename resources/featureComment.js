const {getRequest, postRequest, putRequest, deleteRequest} = require('../utils/requests');

/**
 * Get the list of comment
 * @public
 * @param {string} featureId - ID of the feature
 * @param {Object | null} data - Data to fetch the relevant feature
 * @param {string} [data.startDate]
 * @param {string} [data.endDate]
 * @param {number} [data.pageNo]
 * @param {number} [data.limit]
 * @param {string} [data.select]
 * @return {Promise} List of comment
 * */
const list = async (featureId, data) => {
    const res = await getRequest(`/feature-comment/list/${featureId}`, data);
    return res?.data;
};

/**
 * Create a comment
 *
 * @param {Object} data - Data to create comment
 * @param {String} data.userId - ID of the user
 * @param {String} data.featureId
 * @param {String} data.comment
 * @param {String | null} data.parentId - comment id of parent comment
 * @return {Promise} Create a comment
 * */
const create = async (data) => {
    const res = await postRequest('/feature-comment/create', data);
    return res?.data
};

/**
 * update a comment
 *
 * @param {string} commentId - ID of the comment
 * @param {Object} data - Data to update comment
 * @param {String} data.userId - ID of the user
 * @param {String} data.comment
 * @return {Promise} update a comment
 * */
const update = async (commentId, data) => {
    const res = await putRequest(`/feature-comment/update/${commentId}`, data);
    return res?.data;
};

/**
 * delete a comment
 *
 * @param {string} commentId - ID of the comment
 * @param {Object} data - Data to delete comment
 * @param {String} data.userId - ID of the user
 * @return {Promise} delete a comment
 * */
const destroy = async (commentId, data) => {
    const res = await deleteRequest(`/feature-comment/delete/${commentId}`, data);
    return res?.data;
};

module.exports = {
    list,
    create,
    update,
    destroy
};