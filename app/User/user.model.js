module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define("User_management_table", {
        username:{
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        },
        isAdmin:{
            type: Sequelize.TEXT('tiny')
        }
    }) 
    return User;
}