const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const personSchema = new Schema(
  {
    nombre: String, 
    age: String,
    bio: String, 
    cats: [
      {type: Schema.Types.ObjectId, ref:"Cat"}
      ],

    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Person = model("Person", personSchema);

module.exports = Person;
