
import { createTransport } from 'nodemailer';
import auth from '../config/emailConfig.js';

const transporter = createTransport(auth);

function sendNotification(user1Email, name, transactionType, transactionAmount) {
  const mailOptions = {
    from: auth.user1,
    to: user1Email,
    subject: 'saving Account Transaction Notification',
    text: `Hello, dear ${name} your account has a new ${transactionType} transaction with an amount of ${transactionAmount}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email notification:', error);
    } else {
      console.log('Email notification sent:', info.response);
    }
  });
}

export default sendNotification;
