import {ResponseDto} from "../dto/types";

/**
 * Create a session
 * @public
 * @param {Object} data - Data to create session
 * @param {String} data.marketplaceId
 * @param {String} data.sessionId
 * @param {String} data.content
 * @return {Promise<ResponseDto>} Create a session
 * */
export function create(data: {
    marketplaceId: string;
    sessionId: string;
    content: string;
}): Promise<ResponseDto>;
/**
 * update a session
 * @public
 * @param {string} id - PK of the session
 * @param {Object} data - Data to update session
 * @param {String} data.marketplaceId
 * @param {String} data.sessionId
 * @param {String} data.content
 * @return {Promise<ResponseDto>} update a session
 * */
export function update(id: string, data: {
    marketplaceId: string;
    sessionId: string;
    content: string;
}): Promise<ResponseDto>;
/**
 * Find by session id
 * @public
 * @param {String} sessionId
 * @param {String} marketplaceId
 * @return {Promise<ResponseDto>} Session detail
 * */
export function findBySessionId(sessionId: string, marketplaceId: string): Promise<ResponseDto>;
/**
 * delete a session by sessionId
 * @public
 * @param {string} sessionId - ID of the session
 * @param {String} marketplaceId
 * @return {Promise<ResponseDto>} delete a session
 * */
export function deleteBySessionId(sessionId: string, marketplaceId: string): Promise<ResponseDto>;
/**
 * delete a session by marketplaceId
 * @public
 * @param {String} marketplaceId
 * @return {Promise<ResponseDto>} delete a session
 * */
export function deleteByMarketplaceId(marketplaceId: string): Promise<ResponseDto>;
