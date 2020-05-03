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
    const isAdmin = true
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
        console.log(err)
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the User."
        });
    });
}

exports.signIn = async(req,res)=>{
    const {username} = req.body
    const password = req.body.password.toLowerCase()
    // Validate request
    if (!username || !password) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    try{
        const userDetails = await User.findAll({ where: { username: username } })
        const userPassword = (userDetails[0].dataValues.password)
        const id = (userDetails[0].dataValues.id)
        const isAdmin = (userDetails[0].dataValues.isAdmin)
        const isMatch = await passwordUtils.comparePassword(password, userPassword);
        if (isMatch) {
            const tokens = jwtTokenUtils.signToken(id, username, isAdmin);
            const data = {
              token: tokens,
              id,
              username,
              isAdmin,
            };
            res.status(200).send({ message: 'Logged in successfully', data });
        } else {
            res.status(405).send({ message: "User password does not match" });
        }
    }catch(err){
        console.log(err)
        res.status(500).send({
            message:"An errror occurred"
        })
    }
    
}


// find a single user
exports.findOne = (req, res) => {
    const id = req.params.id;
    try{
        User.findByPk(id)
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