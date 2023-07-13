const mongoose=require('mongoose')

const BookingSchema=new mongoose.Schema({
    start_year: Number,
    end_year: Number,
    name: String,
})
const Booking = mongoose.model('booking', BookingSchema);

module.exports=Booking;