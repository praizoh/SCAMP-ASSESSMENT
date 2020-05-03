const db = require('../config/sequelize')
const User = db.users
const Op = db.Sequelize.Op;

exports.isUser = (req, res, next) => {
    const id = req.decoded.id
    try{
        User.findByPk(id)
        .then(data => {
            
            next()
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

exports.isAdmin = (req, res, next) => {
    try{
        if(req.decoded.admin===true){
            next()
        }else{
            res.status(409).send({message:'Access Denied'})
        }
    }catch(err){
        res.status(500).send({message:'An error occured'})
    }
      
};

exports.notAdmin = (req, res, next) => {
    try{
        if(req.decoded.admin===true){
            res.status(409).send({message:'Access Denied'})
        }else{
            next()
        }
    }catch(err){
        res.status(500).send({message:'An error occured'})
    }
      
};