const nodemailer = require("nodemailer"); 
const dotenv = require('dotenv')
dotenv.config()
exports.emailUtility=(emailFrom, emailTo, emailSubject, emailText) =>{
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            // should be replaced with real sender's account
            user: process.env.user,
            pass: process.env.pass        
        }
    }); 
    console.log(emailTo)
    const mailOptions = {
        // should be replaced with real  recipient's account
        from: emailFrom,
        to: emailTo,         
        subject:emailSubject,
        text:emailText
    };             
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
             console.log(error);
             return error
        }else{
            console.log('Message %s sent: %s', info.messageId, info.response);
            done="true"
            return done
        }
        
    });
} 

  