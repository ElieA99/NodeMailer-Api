//defining packages
express = require('express');
nodemailer = require('nodemailer');
cors = require('cors');
require('dotenv').config();

port = process.env.PORT;
bodyparser = require('body-parser');

app = express();
app.use(cors());
app.use(bodyparser.json());

//post method for email
app.post('/contact', function (req, res) {

    var transporter = nodemailer.createTransport({
        service: 'gmail', //the service used 
        auth:
        {
            user: '#####@gmail.com',//enter your gmail 
            pass: '', //smtp token 
        }

    });

    //mail sending part
    var mailOptions = {
        to: '#####@gmail.com', //enter your gmail 
        subject: `Message from ${req.body.Email}: ${req.body.Subject}`,//the subject  
        text:  req.body.Text,// text to send
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email sent: ' + info.response);
        }
    });
})

//
app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`)
});