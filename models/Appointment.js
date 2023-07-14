const mongoose=require('mongoose')

const AppointmentSchema=new mongoose.Schema({
    waiting: Boolean,
    date_time: Date,
    year: Number,
    location: String,
    make: String,
    model: String,
    fname: String,
    lname: String,
    email: String,
    number: {type:String},
    comments:  String,
    services: String,
})
const Appointment = mongoose.model('appointment', AppointmentSchema);

module.exports=Appointment;