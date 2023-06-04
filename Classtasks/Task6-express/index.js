const express = require('express')
var exphbs  = require('express-handlebars');
const path = require('path')
const app = express()
const port = 3000
let mongoose = require('mongoose');

// Connecting to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/Blogs')
  .then((x) => {
    console.log(`Connected to MongoDB! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname,'static')))

app.use('/',require(path.join(__dirname,'./routes/blog.js')))

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})