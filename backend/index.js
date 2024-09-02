const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

// require models 
const {User} = require('./models/registration');

// require controllers 
const createUser = require('./controllers/registration/ct_createuser')

app.use(express.json())
app.use(cors())

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@devinnovationdb.rcz6p.mongodb.net/DevStream?retryWrites=true&w=majority&appName=DevInnovationDB`)
  .then(() => console.log('Database connected!'));
  
  
app.post('/createuser', createUser)

  
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})