module.exports = app =>{
    const user = require("../User/user.controller")
    const auth = require("../Helpers/auth")
    const { notAUser } = auth


    app.get("/", (req,res)=>{
        res.status(200).send('An Inventory Management System')
    })
    // create a new user
    app.post("/signUp", notAUser, user.create);
    app.post("/auth", user.signIn);

}