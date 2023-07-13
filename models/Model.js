const mongoose=require('mongoose')

const ModelSchema=new mongoose.Schema({
    start_year: Number,
    end_year: Number,
    name: String,
    make: String,
})
const Model = mongoose.model('model', ModelSchema);

module.exports=Model;