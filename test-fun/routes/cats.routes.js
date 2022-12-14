const router = require("express").Router()

const Cat = require("../models/Cat.model")

//C CREATE 

router.get("/cats/create", (req, res, next)=>{

    res.render("create-cat")



})

router.post("/cats/create", (req, res, next)=>{

    Cat.create(req.body)
    .then(newKitty=>{
        res.redirect("/cats")
    })
    .then(err=>console.log(err))

})

//R READ all 

router.get("/cats", (req, res, next)=>{

    Cat.find()
    .then(allCats=>{
        console.log("all kitties", allCats)
        res.render("cats", {allCats})
    })
    .then(err=>console.log(err))

})

//R READ by ID 

router.get("/cats/:id", (req, res, next)=>{

    const {id} = req.params

    Cat.findById(id)
    .then(cat=>{
        res.render("cat-details", cat)
    })
    .catch(err=>console.log(err))
})


//U UPDATE by ID 

router.get("/cats/:id/edit", (req, res, next)=>{

    const {id} = req.params

    Cat.findById(id)
    .then(updateCat=>{

        console.log("cat INFO", updateCat)
        res.render("edit-cat", updateCat)
    })
    .catch(err=>console.log(err))


})

router.post("/cats/:id/edit", (req, res, next)=>{

    const {id} = req.params

    Cat.findByIdAndUpdate(id, req.body, {new:true})
    .then((newUpdatedBook)=>{
        console.log("new info", newUpdatedBook)
        res.redirect(`/cats/${id}`)
    })
    .then(err=>console.log(err))




})


// D DELETE by ID 

router.post("/cats/:id/delete", (req, res, next)=>{

    const {id} = req.params

    Cat.findByIdAndDelete(id)
    .then(()=>{
        res.redirect("/cats")
    })
    .catch(err=>console.log(err))
})


module.exports = router