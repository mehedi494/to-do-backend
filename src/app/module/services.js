
const { Contacts } = require('./model');


const createContacts =async(data)=>{
   
    const result = await Contacts.create(data)
    return result
  
}
const getAllContacts =async()=>{
    const result = await Contacts.find()
    return result 
}
const getSingleContact =async(payload)=>{
  const {id}=payload

    const result = await Contacts.findById(id)
    return result 
}
const updateContact =async(_id,payload)=>{
    const result = await Contacts.updateOne(_id,payload)
    return result 
}
const deleteContact =async(_id)=>{
    const result = await Contacts.deleteOne(_id)
    return result 
}


module.exports.Service ={
  createContacts,getAllContacts,getSingleContact,updateContact,deleteContact
}