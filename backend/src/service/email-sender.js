require("dotenv").config();
const createError = require("http-errors");
const nodemailer = require("nodemailer");

exports.sendEmail = (userEmail, content) => {
  const transporter = nodemailer.createTransport({
    host: "mail.atw.hu",
    port: 465,
    secure: true,
    auth: {
      user: "info@webhaccp.hu",
      pass: "FElhasznalo11",
    },
  });

  const mailData = {
    from: "info@webhaccp.hu",
    to: userEmail,
    subject: content.subject,
    html: content.content,
  };

  return transporter.sendMail(mailData, (error, info) => {
    if (error) {
      console.log(error);
      return new createError.BadRequest(error);
    }
    return { message: "Mail sent successfully", message_id: info.messageId };
  });
};
