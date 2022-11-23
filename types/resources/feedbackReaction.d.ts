import {ResponseDto} from "../dto/types";

/**
 * Create/update/delete reaction on a feedback
 *
 * @param {Object} data - Data for reaction
 * @param {String} data.userId - ID of the user
 * @param {String} data.feedbackId
 * @param {String} data.reaction
 * @return {Promise<ResponseDto>} Create/update/delete a Reaction
 * */

export function reaction(data: {
    userId: string;
    feedbackId: string;
    reaction: string;
}): Promise<ResponseDto>;
