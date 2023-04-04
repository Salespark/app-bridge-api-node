import {ResponseDto} from "../dto/types";

/**
 * Create/update/delete reaction on a comment
 *
 * @param {Object} data - Data for reaction
 * @param {String} data.userId - ID of the user
 * @param {String} data.commentId
 * @param {String} data.reaction
 * @return {Promise<ResponseDto>} Create/update/delete a Reaction
 * */
export function reaction(data: {
    userId: string;
    commentId: string;
    reaction: string;
}): Promise<ResponseDto>;
