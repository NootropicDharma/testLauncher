const {Schema, model} = require("mongoose")

const catSchema = new Schema ({


    name: String,
    breed: String, 
    age: Number,
    favoriteFood: String,
    
    






},{timestamps:true})

module.exports = model("Cat", catSchema)

