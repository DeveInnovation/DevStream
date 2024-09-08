const {User} = require('../../models/registration');
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');
var   JWT = require('jsonwebtoken');
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
          const token = JWT.sign({ email }, jwt_privetkey, {expiresIn: "24h"})
          const verifymsgid = await verification_email(email, name) // send verification link

          return res.send({user_email: newuser.email, token, msgid: verifymsgid})
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


const verification_email = async (email, name) =>{
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.G_ADDRESS,
      pass: process.env.G_PASS
    },
  });
  
  const info = await transporter.sendMail({
    from: '"DevStream" <deveinnovation@gmail.com>',
    to: email, 
    subject: `Account verification - Date: ${new Date()}`, 
    text: "Please active your account", 
    html: `
            <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
              <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                  <h2 style="text-align: center; color: #333333;">Welcome to DevStream!</h2>
                  <p style="color: #333333; font-size: 16px; line-height: 1.5;">
                      Hello ${name ? name : "dear"},
                  </p>
                  <p style="color: #333333; font-size: 16px; line-height: 1.5;">
                      We're excited to have you on board. To get started, please activate your account by clicking the button below:
                  </p>
                  <div style="text-align: center; margin: 20px 0;">
                      <a href="https://devstream-rho.vercel.app/verify_email/${email}" style="display: inline-block; padding: 12px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px; font-size: 16px;">Activate My Account</a>
                  </div>
                  <p style="color: #333333; font-size: 16px; line-height: 1.5;">
                      If the button above doesn't work, please copy and paste the following link into your browser:
                  </p>
                  <p style="color: #007bff; font-size: 14px; word-wrap: break-word;">
                      https://devstream-rho.vercel.app/verify_email/${email}
                  </p>
                  <p style="color: #333333; font-size: 16px; line-height: 1.5;">
                      This link will expire in 24 hours, so be sure to activate your account soon!
                  </p>
                  <p style="color: #333333; font-size: 16px; line-height: 1.5;">
                      If you did not sign up for a DevStream account, please ignore this email.
                  </p>
                  <p style="color: #333333; font-size: 16px; line-height: 1.5;">
                      Thank you for joining DevStream! We're thrilled to have you with us.
                  </p>
                  <p style="color: #333333; font-size: 16px; line-height: 1.5;">
                      Best regards,<br>
                      <strong>The DevStream Team</strong>
                  </p>
              </div>
          </div>
    `,
  });

  console.log("Message sent: %s", info.messageId);
  return info.messageId
}


const requestForgotPassword = (req, res) => {
  const email = req.params.email;
  let generated_code = ""
  const characters = process.env.RAND_NUM;

  // Generate a string of 5 characters with random letters and digits
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    generated_code += characters[randomIndex];
  }

  JWT.sign({
    email, 
    auth_verify_code: generated_code
  }, jwt_privetkey, {expiresIn: "10m"}) // token for every request
  
  res.send({
    warn: "We've sent a verification code to your email address.", 
    warn2: "Please check your inbox (and spam/junk folder) and enter the code to proceed. If you don't receive the email within a few minutes, please try again or contact our support."
  })
}

module.exports = {createUser, userLogin, userVerify, requestForgotPassword}