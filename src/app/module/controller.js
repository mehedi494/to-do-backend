// const httpStatus =require( 'http-status');
// const mongoose =require('mongoose');
const {  Service } = require('./services');

const createContacts = async(req,res)=>{
try {
  // console.log(req.body);
  const result = await Service.createContacts(req.body)
  // console.log(result);
  res.json(result)
} catch (error) {
  console.log(error);
  res.send (error)
}
}
const getAllContacts = async(req,res)=>{
try {
  const result = await Service.getAllContacts()
  // console.log(result);
  res.json(result)
} catch (error) {
  res.send (error)
}
}
const getSingleContact = async(req,res)=>{
try {
  const result = await Service.getSingleContact(req.params)
  // console.log(result);
  res.json(result)
} catch (error) {
  res.send (error)
}
}
const updateContact = async(req,res)=>{
try {
  // console.log(req.params,req.body);

  const result = await Service.updateContact(req.params,req.body)
  // console.log(result);
  res.json(result)
} catch (error) {
  res.send (error)
}
}
const deleteContact = async(req,res)=>{
try {
// console.log(req.params);
  const result = await Service.deleteContact(req.params)
  // console.log(result);
  res.json(result)
} catch (error) {
  res.send (error)
}
}


module.exports.Controller={
  createContacts,getAllContacts,getSingleContact,updateContact,deleteContact,
}