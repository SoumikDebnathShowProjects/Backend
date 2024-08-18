require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('Hi i have send this response')
})
app.get('/login',(req,res)=>{
    res.send('this is your login page response')
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
//////////////////////////////
//in case of secure the port using .env
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})