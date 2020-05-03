module.exports = app =>{
    const auth = require("../Helpers/auth")
    const inventory = require("../Inventory/inventory.controller")
    const tokenUtils = require("../Helpers/jwtTokenUtils")
    const { isAdmin, isUser, notAdmin } = auth
    const { verifyToken } = tokenUtils
    app.post("/inventory", verifyToken, isAdmin, inventory.create);
    app.get("/inventory", verifyToken, isUser, inventory.findAll)
    app.get("/inventory/:id", verifyToken, isUser, inventory.findOne)
    app.post("/inventory/order", verifyToken, notAdmin, inventory.order)

}