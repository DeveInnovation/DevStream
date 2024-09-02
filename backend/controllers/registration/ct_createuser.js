const {User} = require('../../models/registration');
const bcrypt = require('bcrypt');
var JWT = require('jsonwebtoken');
const jwt_privetkey = process.env.JWT_KEY

const createUser = async(req, res) =>{
    try{
        const {name, email, phone, password} = req.body;
        const newPass = await bcrypt.hash(password, 8);
        
        const newuser = new User({
          name,
          email,
          phone,
          password: newPass
        })
        
        if(newuser){
          await newuser.save()
          const token = JWT.sign({ user: newuser }, jwt_privetkey, {expiresIn: "5h"})
          return res.send({user_email: newuser.email, token})
        }
        else{
          res.status(404).send({error: 'Something went wrong! Please try again.'})
        }
      }
      catch(e){
        if(e.code === 11000){
          if(e.errmsg.includes("phone")){
            return res.status(400).send({error: "This phone number already exists"})
          }
          else if(e.errmsg.includes("email")){
            return res.status(400).send({error: "This email already exists!"})
          }
          else{
            return res.status(404).send({error: 'Something went wrong! Please try again.'})
          }
        }
      }
}

module.exports = createUser