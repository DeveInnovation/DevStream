const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

app.use(express.json())
app.use(cors())

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@devinnovationdb.rcz6p.mongodb.net/?retryWrites=true&w=majority&appName=DevInnovationDB`)
  .then(() => console.log('Database connected!'));
  
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})