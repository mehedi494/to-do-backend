

const  { Schema, model } =require('mongoose');
const contactSchema =new Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    trim:true
  },
  phone:{
    type:String,
    required:true,
    trim:true,
    unique:true
    
  },
  img:{
    type:String,
    required:true,
    trim:true
  },
  address:{
    type:String,
    required:true,
    
  },
 isFav: {
  type:Boolean,
  default:false

  }

},{timestamps:true})
module.exports.Contacts =  model('contacts', contactSchema)