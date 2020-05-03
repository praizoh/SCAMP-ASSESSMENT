const db = require('../config/sequelize')
const Inventory = db.inventory
const Op = db.Sequelize.Op;
const sendOrder = require('../Helpers/emailUtil')
// create and save a new inventory
exports.create = async(req,res)=>{
    const {name, color, quantity, supplierName, supplierEmail} = req.body
    // Validate request
    if (!name || !quantity || !parseInt(quantity) || !supplierEmail) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const isAvailable = true
    const addedBy = req.user.id
    // create an inventory
    const inventory = {
        name:name,
        color:color,
        addedBy:addedBy,
        isAvailable:isAvailable,
        quantity:quantity,
        supplierName:supplierName,
        supplierEmail:supplierEmail
    }
    // Save Inventory in the database
    Inventory.create(inventory)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the Inventory."
        });
    });
}

// find a single inventory
exports.findOne = (req, res) => {
    const id = req.params.id;
    try{
        Inventory.findByPk(id)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message: "Error retrieving inventory with id=" + id
        });
        });
    }catch(err){
        res.status(500).send({message:'An error occured'})
    }
    
};

// find inventories
exports.findAll = (req, res) => {
    try{
        User.findAll()
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message: "Error retrieving user with id=" + id
        });
        });
    }catch(err){
        res.status(500).send({message:'An error occured'})
    }
    
};

// Order for inventories
exports.order = async(req,res)=>{
    const {id, quantity} = req.body
    try{
        const getInventory = await Inventory.findByPk(id)
        console.log(getInventory)
        if(!getInventory.name){
            res.status(400).send({message: 'Inventory not found'})
        }else{
            const email = getInventory.supplierEmail
            let supplier = getInventory.supplierName
            const name = getInventory.name
            if(!supplier){supplier="Prestigious Supplier"}
            const emailFrom = 'SCAMP-ASSESSMENT  <noreply@inventory.com>';
            const subject = 'Inventory Order';
            const text = `Hello ${supplier}, \n \nWe at SCAMP-ASSESSMENT-INVENTORY(SAI), hope this mail reaches you well. We will like to take the following orders.\n \nItem Name: ${name}. \n \nQuantity: ${quantity}. \n \nItem Name: ${name}.We will like a response from you stating the price for this order soon.\n \nThank you. \n \n SAI Team`;
            await sendOrder.emailUtility(emailFrom, email, subject, text);
            res.status(200).send({message:"Password updated"})
        
        }
               
    }catch(err){
        res.status(500).send({message: 'An error occured'})
    }
}