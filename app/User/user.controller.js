const db = require('../config/sequelize')
const User = db.users
const Op = db.Sequelize.Op;
const passwordUtils= require('../Helpers/passwordUtils')
const jwtTokenUtils= require('../Helpers/jwtTokenUtils')
// create and save a new user
exports.create = async(req,res)=>{
    const {username, password} = req.body
    // Validate request
    if (!username || !password) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const isAdmin = false
    const userPassword = await passwordUtils.hashPassword(password.toLowerCase())
    // create a user
    const user = {
        username: username,
        password:userPassword,
        isAdmin:isAdmin

    }
    // Save User in the database
    User.create(user)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the User."
        });
    });
}

// retrieve all users from the db
exports.findAll = (req, res) => {
  
};

// find a single user
exports.findOne = (req, res) => {
  
};