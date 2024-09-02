const {User} = require('../../models/registration');

const createUser = async(req, res) =>{
    try{
        const {name, email, phone, password} = req.body;
        const newuser = new User({
          name,
          email,
          phone,
          password
        })
        if(newuser){
          await newuser.save()
          return res.send(newuser)
        }
      }
      catch(e){
        if(e.code === 11000){
          if(e.errmsg.includes("phone")){
            return res.status(400).send({error: "This phone number already exists"})
          }else{
            return res.status(400).send({error: "This email already exists!"})
          }
        }
      }
}

module.exports = createUser