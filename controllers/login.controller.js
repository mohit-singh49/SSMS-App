const rdb = require('../dbconnections/redis.connection');
const jwt = require('jsonwebtoken');
const {uuid} = require('uuidv4');
const User = require("../models/user");
module.exports = {
    bitsidlogin : (req,res) => {
        if(!req.email || !req.username){
            return res.status(400).json({e:"Something Went Wrong"});
        }
        let check = req.email.split("@")[1].split(".")[0];
        if(check != "pilani"){
            return res.status(401).json({e:"Use BITS Pilani mail id"});
        }
        

    },
    logout : (req,res) => {

    }
};