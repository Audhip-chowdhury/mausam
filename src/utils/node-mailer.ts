import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    user: "c72f5074d87c4d6846676661",
    pass: "e9165da2764d6f8cdd990c0eca0a2b0925808d0e3d33e41d4c0236a3bca8fcb5",
  },
});

export async function sendEmail(email: any, feedback: any) {
  console.log("ewfeww")
  const info = await transporter.sendMail({
    from: email, // sender address
    to: 'audhipchowdhury@gmail.com', // list of receivers
    subject: "Mausam Feedback",
    text: feedback
  });

  console.log("Message sent: %s", info.messageId);
}
