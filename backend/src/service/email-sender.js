require("dotenv").config();
const createError = require("http-errors");
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");

exports.sendEmail = (userEmail, content) => {
  const transporter = nodemailer.createTransport(
    sgTransport({
      auth: {
        api_key:
          "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",
      },
    })
  );

  const mailData = {
    from: "sanyos07@gmail.com",
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
