var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
require('dotenv').config();

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var firstName = req.body.firstName
  var lastName = req.body.lastName
  var email = req.body.email
  var cellNumber = req.body.cellNumber
  var message = req.body.message
  var content = `Name: ${firstName} ${lastName}\n email: ${email} \n cell number: ${cellNumber} \n message: ${message} `

  var mail = {
    from: firstName+" "+lastName,
    to: 'Hunterjm428@gmail.com',  
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success' 
      })
    }
  })
})

module.exports = router;