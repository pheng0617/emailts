"use strict";
var cron = require("node-cron");
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    host: "smtp.googlemail.com",
    port: 465,
    secure: true,
    auth: {
        user: "pheng617@gmail.com",
        pass: "xxxxxxx"
    }
});
var mailOptions = {
    from: '"Paul SMTP" <pheng617@gmail.com>',
    to: "pheng0617@gmail.com",
    subject: "Eat shit and code bitch",
    text: "Code Code."
};
cron.schedule("* * * * *", function () {
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Email sent: " + info.response);
        }
    });
});
