const {postRequest} = require('../utils/requests');

/**
 * Create/update/delete reaction on a comment
 *
 * @param {Object} data - Data for reaction
 * @param {String} data.userId - ID of the user
 * @param {String} data.commentId
 * @param {String} data.reaction
 * @return {Promise} Create/update/delete a Reaction
 * */
const reaction = async (data) => {
    const res = await postRequest('/comment-reaction', data);
    return res?.data
};

module.exports = {
    reaction,
};