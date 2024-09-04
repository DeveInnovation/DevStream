const {User} = require('../../models/registration');
const bcrypt = require('bcrypt');
var JWT = require('jsonwebtoken');
const jwt_privetkey = process.env.JWT_KEY

const createUser = async(req, res) =>{
    try{
        const {name, email, phone, password, terms_condition} = req.body;
        const newPass = await bcrypt.hash(password, 8);
        
        const newuser = new User({
          name,
          email,
          phone,
          password: newPass,
          terms_condition
        })
        
        if(newuser){
          await newuser.save()
          const token = JWT.sign({ email }, jwt_privetkey, {expiresIn: "5h"})
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

const userLogin = async(req, res) => {
    const {email, password} = req.body;
    const existuser = await User.findOne({email}) // find user
    if(existuser){
      bcrypt.compare(password, existuser.password, async (err, response) => {
        if(response === true){
          const token = JWT.sign({ email }, jwt_privetkey, {expiresIn: "5h"})
          return res.status(200).send({email: existuser.email, token, message: "Login successful!"})
        }else{
          return res.status(404).send({error: "Incorrect password."})
        }
      }) //password checking
    }
    else{
      return res.status(404).send({error: "This user does not exists!"})
    }
}

const userVerify = async(req, res) => {
  const email = req.params.email
  const existuser = await User.findOne({email}) // find user
  if(existuser){
    if(existuser.is_active === false){
      await User.findOneAndUpdate({email: email}, {is_active: true})
      return res.status(200).send({message: "Email verified successfully."})
    }
    else{
      return res.status(500).send({error: "User already verified!"})
    }
  }
  else{
    return res.status(404).send({error: "This is not a valid gmail account!"})
  }
}

module.exports = {createUser, userLogin, userVerify}