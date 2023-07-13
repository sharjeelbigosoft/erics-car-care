const mongoose=require('mongoose')

const MakeSchema=new mongoose.Schema({
    start_year: Number,
    end_year: Number,
    name: String,
})
const Make = mongoose.model('make', MakeSchema);

module.exports=Make;