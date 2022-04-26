const express = require('express');
const mongoose= require('mongoose');
const app = express();
mongoose.connect( 'mongodb://localhost:27017/new',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
}).then(()=>{
    console.log('connections successful');
}).catch((err) => console.log('no connections'));




app.get('/',(req,res)=>{  // send database
    res.send({"data": [{
        first : 'Amit',
        last_name : 'Kumar',
    }]})
})

// app.post('/username',(req,res)=>{ // new Entry 
//    console.log(">>>>>>>>>>>>>>>>>>>>>",req.body);
//    res.send({data: req.body, mas: "Data updated successfully"})
// })




app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})