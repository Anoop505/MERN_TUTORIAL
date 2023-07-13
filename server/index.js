// MERN - MONGO + EXPRESS + REACT + NODE

// Development = Node.js server + React server

const express = require("express");
const app = express();
const mongoose = require('mongoose');

const User = require('./models/user.model');``

const cors = require("cors");
app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mern-tutorial')

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    res.json({ status: 'ok' })
    
  } catch (error) {
    console.log(error);
    res.json({ status: 'error', error:'duplicate email' })
  }
});

app.post('/api/login', async (req, res)=>{
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
    })

  if (user){  
    return res.json ({status : 'OK', user: 'True'}) 
  } else {
    return res.json({ status : 'Error', user: 'False'})
  }

})


app.listen(5001, () => {
  console.log("Server started on 5001");
});
