const mongoose=require('mongoose')

const ServiceSchema=new mongoose.Schema({
    appoint_id: String,
    name: String,
    comment: String,
})
const Services = mongoose.model('service', ServicesSchema);

module.exports=Service;