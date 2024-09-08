const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()

// require models ///////////////////////////////
  const {User} = require('./models/registration');
//////////////////////////////////

// require controllers /////////////////////////
  const {createUser, userLogin, userVerify, requestForgotPassword, changePassByForgottenEmail, changePassByVerify} = require('./controllers/registration/ct_createuser')
/////////////////////////////////

app.use(express.json())
app.use(cors())

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@devinnovationdb.rcz6p.mongodb.net/DevStream?retryWrites=true&w=majority&appName=DevInnovationDB`)
  .then(() => console.log('Database connected!'));
  
  
app.post('/createuser', createUser) //create a user
app.post('/userlogin', userLogin) // login
app.patch('/user-verify-devstream/:email', userVerify) // verification by email

app.post('/request-forgot-password/api/:email', requestForgotPassword)
app.post('/get-code-by-forgotten-email', changePassByForgottenEmail)
app.patch('/change-pass-by-forgotten-email', changePassByVerify)


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})