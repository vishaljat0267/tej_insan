const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

const DB = 'mongodb+srv://vishal:Vishal@0267@cluster0.c9vwu.mongodb.net/mernstackindexddd?retryWrites=true&w=majority'
mongoose.connect((DB),{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnfiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log('connections successful');
}).catch((err) => console.log('no connections'));





app.get('/',(req,res)=>{  // send database
    res.send({"data": [{
        first : 'Amit',
        last_name : 'Kumar',
    }]})
})

app.post('/username',(req,res)=>{ // new Entry 
   console.log(">>>>>>>>>>>>>>>>>>>>>",req.body);
   res.send({data: req.body, mas: "Data updated successfully"})
})




app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})