const nodemailer = require('nodemailer');
exports.sendMail = async (address,code) => {
    const html = `
<h1>Hello</h1>
<p>${code}</>
`;
const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 465,
  secure: true,
  auth: {
    user: "temonation123@yahoo.com",
    pass: "tqmsyswranxdkjsp",
  },
});
const info = await transporter.sendMail({
  from: "petify-support <temonation123@yahoo.com>",
  to: address,
  subject: code,
  html: html,
});
console.log("messege send: " + info.messageId);
};