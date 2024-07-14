import nodemailer from 'nodemailer';

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER, // replace with your email
      pass: process.env.EMAIL_PASS,  // replace with your email password or app-specific password
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // the email address where you want to receive messages
    subject: `Message from ${name}`,
    text: `${message}:
        
        Name: ${name}
        Email: ${email}
        Message: ${message}`,
  };

  try {
    if (!name || !email || !message) {
      return res.status(500).send({
        success: false,
        message: "Please Provide all fields"
      })
    }
    await transporter.sendMail(mailOptions)
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Failed to send email');
  }
}

export default sendEmail