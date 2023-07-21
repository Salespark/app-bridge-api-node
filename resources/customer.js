const {postRequest, putRequest, deleteRequest} = require('../utils/requests');

/**
 * Get the list of customers form the given marketplace
 *
 * @param {Object} data - Data to fetch the relevant carts
 * @param {String} data.marketplaceId - ID of the marketplace
 * @param {Object} data.payload - Data payload
 * @return {Promise} List of customers
 * */
const list = async (data) => {
    const res = await postRequest(`/customers/list`, data);
    return res?.data;
};

/**
 * Get the customer from the given marketplace
 *
 * @param {Object} data - Data to fetch the relevant customer
 * @param {String} data.id - ID of the customer
 * @param {String} data.marketplaceId - Marketplace id
 * @return {Promise} The fetched cart from the marketplace
 * */
const getById = async (data) => {
    const res = await postRequest(`/customers/find-by-id`, data);
    return res?.data;
};

/**
 * Create a customer
 *
 * @param {Object} data - Data to create customer
 * @param {String} data.marketplaceId - ID of the marketplace
 * @param {String} data.email - Email of the customer
 * @param {Object} data.payload - Data payload
 * @return {Promise} Create a customer
 * */
const create = async (data) => {
    const res = await postRequest('/customers/create', data);
    return res?.data
};

/**
 * update a customer
 *
 * @param {Object} data - Data to create customer
 * @param {String} data.marketplaceId - ID of the marketplace
 * @param {String} data.email - Email of the customer
 * @param {Object} data.payload - Data payload
 * @return {Promise} update a customer
 * */
const update = async (data) => {
    const res = await putRequest('/customers/create', data);
    return res?.data;
};

/**
 * Delete customer from the given marketplace and customer id
 *
 * @param {Object} data - Data to delete customer
 * @param {String} data.marketplaceId - ID of the marketplace
 * @param {String} data.customerId - ID of the customer
 * @return {Promise}
 * */
const deleteCustomer = async (data) => {
    const res = await deleteRequest('/customers/delete', data);
    return res?.data;
};

module.exports = {
    list,
    getById,
    create,
    update,
    deleteCustomer,
};
