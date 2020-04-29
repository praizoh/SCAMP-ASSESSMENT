module.exports = app =>{
    const user = require("../User/user.controller")


    app.get("/", (req,res)=>{
        res.status(200).send('An Inventory Management System')
    })
    // create a new user
    app.post("/signUp", user.create);

}