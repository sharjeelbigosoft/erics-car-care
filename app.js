const express=require('express')
const app=express();
const cors=require('cors')
// let bodyParser=require('body-parser')
// const cookieParser=require('cookie-parser')

//middlewares
app.use(cors({
    origin: ['http://localhost:3000', '*'],
    credentials: true
}));
/*Parse the body of request and add the data in req variable*/
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// app.use(cookieParser())

const Make=require('./models/Make')
const Model=require('./models/Model')
const Appointment=require('./models/Appointment')

app.get('/test', (req, res)=>{
    console.log("successful");
    res.send("Done");
})

app.get('/make', async (req, res)=>{
    console.log(req.query.year)
    let response= await Make.find({$or:[{start_year:{$lte:req.query.year}}, {end_year:{$gte:req.query.year}}]})
    console.log((response))
    res.send(response)
})

app.get('/model', async(req, res)=>{
    let response=await Model.find({$and: [{$or:[{start_year:{$lte:req.query.year}}, {end_year:{$gte:req.query.year}}]}, {"make": req.query.make}]})
    console.log(response)
    res.send(response)
})

app.post('/appointment', async (req, res)=>{
    let appointment=new Appointment({
        waiting:Boolean(req.body.waiting),
        date_time:new Date(req.body.date),
        year:req.body.Year,
        location:req.body.place,
        make:req.body.Make,
        model:req.body.Model,
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        number:req.body.number,
        comments:req.body.comments,
    })
    console.log(await appointment.save())
    console.log(Boolean(req.body.waiting))
    console.log(new Date(req.body.date))
    console.log(req.body.Year)
    console.log(req.body.place)
    console.log(req.body.Make)
    console.log(req.body.Model)
    console.log(req.body.fname)
    console.log(req.body.lname)
    console.log(req.body.email)
    console.log(req.body.number)
    console.log(req.body.comments)
    console.log(req.body.services)
    res.send('Done')
})

app.all('*' , (req, res)=>{
    console.log("Invalid request")
    res.status(404).send()
})

module.exports = app;