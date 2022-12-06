import {ResponseDto} from "../dto/types";
/**
 * Create/update/delete reaction on a feature
 *
 * @param {Object} data - Data for reaction
 * @param {String} data.userId - ID of the user
 * @param {String} data.featureId
 * @param {String} data.reaction
 * @return {Promise<ResponseDto>} Create/update/delete a Reaction
 * */
export function reaction(data: {
    userId: string;
    featureId: string;
    reaction: string;
}): Promise<ResponseDto>;
