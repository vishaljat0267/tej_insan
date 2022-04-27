const express = require('express');
const mongoose= require('mongoose');
const {Schema,model} = mongoose
const app = express();
app.use(express.json())
const DB = 'mongodb+srv://vish:1234@cluster0.c9vwu.mongodb.net/mernstack'

{
mongoose.connect(DB,{
    useNewUrlParser: true,
  
    // useUnfiedTopology: true,
    // useFindAndModify: false
}).then(()=>{
    console.log('connections successful');
}).catch((err) => console.log('no connections'));

}




const UserSchema = new Schema({
    name:String,
    phone:Number,
    email:String,
    password:String
})

const UserCollec = model("UserCollec",UserSchema)


app.post('/username',(req,res)=>{ // new Entry                                                     
               const userDetail = UserCollec(req.body)
               userDetail.save((err,userDetail)=>{
                   if(err){
                       res.status(500).send({err})
                   }
                   else{
                       res.status(200).send({data:userDetail})
                   }
               })
})




app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})

