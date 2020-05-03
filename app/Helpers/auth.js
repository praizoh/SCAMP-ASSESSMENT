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
        if(req.decoded.admin==='1'){
            next()
        }else{
            res.status(409).send({message:'Access Denied, Not An Admin'})
        }
    }catch(err){
        res.status(500).send({message:'An error occured'})
    }
      
};

exports.notAdmin = (req, res, next) => {
    try{
        if(req.decoded.admin==="1"){
            res.status(409).send({message:'Access Denied, Only Sales Persons are allowed'})
        }else{
            next()
        }
    }catch(err){
        res.status(500).send({message:'An error occured'})
    }
      
};