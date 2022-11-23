const {postRequest} = require('../utils/requests');

/**
 * Create/update/delete reaction on a feedback
 *
 * @param {Object} data - Data for reaction
 * @param {String} data.userId - ID of the user
 * @param {String} data.feedbackId
 * @param {String} data.reaction
 * @return {Promise} Create/update/delete a Reaction
 * */
const reaction = async (data) => {
    const res = await postRequest('/reaction', data);
    return res?.data
};

module.exports = {
    reaction,
};