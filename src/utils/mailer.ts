import nodemailer from "nodemailer";

// TODO:  ALL THE VALUESD ARE DE-STURCUTRED IN THE PARAMS. MAYBE IT PASSED THROUGH PROPS, CUASE WE USED REACT FOR FRONTEND. AND IT'S ALSO GONNA BE HAPPEND CAUSE IT'S NOT TOO BIG PROJECT. I seems like there is something wrong cause, sir meant from 'email' is : kisko send karni h email, and i think it more good if parameter name is reciever casue send by the database/server/by ourside. and email type: for which context: 1. forgot email, 2. verify email. and last is userId, i think it's used to check who should recieved this mail and who actually get this. and lastly to identify it's correct suer or not, who should own it.

export const sendEmail = async ({email, emailType, userId}:any) => {
  // TODO: Configure mail for usage

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 465,
      secure: false,
      // TODO: replace 'user' and 'pass' values from <https://forwardemail.net>
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });

    const emailOptions = {
    from: 'sumitwedshinata@lovelycouple.com',
    to: email, // list of receivers
    subject: emailType === 'VERIFY' ? 'Verify Your Email' : 'Reset Your Password',
    // text: "become a part of are new journey of life with a excited welcome, so please wish us a very good luck!",
    html: "<b>Hello world?</b>",
    }
    const mailResponse = await transporter.sendMail(emailOptions);
    return mailResponse;
  }
  catch (error:any) {
    console.error(`Send Mail To User :: FACED AN ISSUE :: :: UTILS => mailer.ts ::\n${error.message}`);
  }
}