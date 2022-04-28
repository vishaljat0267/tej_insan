const express = require('express');
const mongoose= require('mongoose');
const {Schema,model} = mongoose
const cors = require("cors");
const jwt = require('jsonwebtoken')
const app = express();
app.use(cors())
app.use(express.json())

const port =process.env.PORT || 8080

const DB = 'mongodb+srv://vish:1234@cluster0.c9vwu.mongodb.net/mernstack'

{
mongoose.connect(     DB,{
    // useNewUrlParser: true,
  
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
    password:String,
    confirm_password:String
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


app.get("/login", (req, res) =>{
    res.render("login");
})

app.post("/login",async(req, res) =>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await UserCollec.findOne({email:email,password:password});
        // console.log(useremail);
        if(useremail.password === password){
            const token=jwt.sign({useremail},'email')
            console.log(token);
            res.status(200).send({msg:"Login Successful",data:{token,useremail}});

        }else{
            res.send("invaild login Details");
        }

    } catch (error){
        res.status(400).send("invaild login Details")
    }
})




app.listen(port, ()=>{
    console.log("Server is running on port 8080");
})

