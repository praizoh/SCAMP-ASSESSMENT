module.exports = (sequelize, Sequelize) =>{
    const Inventory = sequelize.define("Inventory_management_table", {
        name:{
            type: Sequelize.STRING
        },
        color:{
            type: Sequelize.STRING
        },
        addedBy:{
            type: Sequelize.STRING
        },
        isAvailable:{
            type: Sequelize.TEXT('tiny')
        },
        quantity:{
            type:Sequelize.INTEGER
        },
        supplierName:{
            type: Sequelize.STRING
        },
        supplierEmail:{
            type: Sequelize.STRING
        }
    }) 
    return Inventory;
}