const { Schema, model } = require("mongoose");
// const { stringify} = require("")

const UserSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    confirm_password: String,
    verificationCode:String,
    status: String,
    cartItems:[

    ]

})

module.exports.Usercollec = new model("UserSchema", UserSchema)

const clothelists = new Schema({
    title: String,
    price: String,
    discription: String,
    category: String
});

module.exports.user = new model("clothelists", clothelists)

const electronics = new Schema({
})
module.exports.user1 = new model("electronics", electronics)
const womanproducts = new Schema({
})
module.exports.user2 = new model("womanproducts", womanproducts)

const products = new Schema({
})
module.exports.user3 = new model("products", products)


const addcards = new Schema({
    title: String,
    image: String,
    price: String,
    quantitiy: String,
    discription: String,
    category: String,
    rating: String
})
module.exports.user4 = new model("addcards", addcards)












