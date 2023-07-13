const mongoose=require('mongoose')

const ServiceSchema=new mongoose.Schema({
    name: String,
})
const Services = mongoose.model('service', ServicesSchema);

module.exports=Service;