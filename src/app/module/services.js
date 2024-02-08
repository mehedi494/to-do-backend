const { Task } = require("./model");

const createContacts = async (data) => {
  const result = await Task.create(data);
  return result;
};
const getAllContacts = async () => {
  const result = await Task.find();
  return result;
};
const getSingleContact = async (payload) => {
  const { id } = payload;

  const result = await Task.findById(id);
  return result;
};
const updateContact = async (_id, payload) => {
  const result = await Task.updateOne(_id, payload);
  return result;
};
const deleteContact = async (_id) => {
  const result = await Task.deleteOne(_id);
  return result;
};

module.exports.Service = {
  createContacts,
  getAllContacts,
  getSingleContact,
  updateContact,
  deleteContact,
};
