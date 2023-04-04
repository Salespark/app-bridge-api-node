const {getRequest, postRequest, putRequest, deleteRequest} = require('../utils/requests');

/**
 * Get the list of feedback
 * @public
 * @param {Object | null} data - Data to fetch the relevant feedback
 * @param {string} [data.startDate]
 * @param {string} [data.endDate]
 * @param {number} [data.pageNo]
 * @param {number} [data.limit]
 * @param {string} [data.select]
 * @return {Promise} List of feedback
 * */
const list = async (data) => {
    const res = await getRequest(`/feedback/list`, data);
    return res?.data;
};

/**
 * Create a feedback
 * @public
 * @param {Object} data - Data to create feedback
 * @param {String} data.userId - ID of the user
 * @param {String} data.title
 * @param {String} data.description
 * @return {Promise} Create a feedback
 * */
const create = async (data) => {
    const res = await postRequest('/feedback/create', data);
    return res?.data
};

/**
 * update a feedback
 * @public
 * @param {string} feedbackId - ID of the feedback
 * @param {Object} data - Data to update feedback
 * @param {String} data.userId - ID of the user
 * @param {String} data.title
 * @param {String} data.description
 * @return {Promise} update a feedback
 * */
const update = async (feedbackId, data) => {
    const res = await putRequest(`/feedback/update/${feedbackId}`, data);
    return res?.data;
};

/**
 * delete a feedback
 * @public
 * @param {string} feedbackId - ID of the feedback
 * @param {Object} data - Data to delete feedback
 * @param {String} data.userId - ID of the user
 * @return {Promise} delete a feedback
 * */
const destroy = async (feedbackId, data) => {
    const res = await deleteRequest(`/feedback/delete/${feedbackId}`, data);
    return res?.data;
};

module.exports = {
    list,
    create,
    update,
    destroy
};