const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const cors = require("cors");
app.use(cors()); 


require("./app/User/user.route.js")(app) 
// require("./app/Inventory/inventory.route.js")(app) 

const db = require("./app/config/sequelize");
db.sequelize.sync();


// Connect to port
const port = process.env.PORT || 5000     

app.listen(port, ()=> console.log(`listening on port ${port}...`));    