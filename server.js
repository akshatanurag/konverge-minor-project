const express = require('express')
require('./db/connection')
const bodyParser = require('body-parser')
const Swal = require('sweetalert2')
var session = require('express-session')
const fileUpload = require('express-fileupload');

const app = express()
app.use(fileUpload());


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'sdcdscsdhcjsdhchsd12345',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.get("/",(req,res)=>{
  res.render("auth/login")
})
require('./route-handler')(app)



var port = process.env.PORT || 3000
app.listen(port,process.env.IP,()=>{
    console.log('Server is up on port 3000')
})