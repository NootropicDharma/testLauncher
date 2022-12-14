const router = require("express").Router()

const Person = require("../models/Person.model")

const Cat = require("../models/Cat.model")




router.get("/person/create", (req, res, next)=>{

    Cat.find()
    .then(data=>{
        res.render("create-person", {data})
    })
    .catch(err=>console.log(err))


})



router.post("/person/create", (req, res, next)=>{

    const {name, bio, age, cats} = req.body


    Person.create({name, bio, age, cats})
    .then(newPerson=>{
        res.redirect("/people")
    })
    .catch(err=>console.log(err))

})


router.get("/people", (req, res, next)=>{

    Person.find()
    .populate("cats")
    .then(data=> {
        res.render("people", {data})
    })
    .catch(err=>console.log(err))
})

module.exports = router