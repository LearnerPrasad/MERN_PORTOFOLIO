import nodemailer from 'nodemailer';

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please provide all fields: name, email, message' });
  }

  try {
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // replace with your email
        pass: process.env.EMAIL_PASS, // replace with your email password or app-specific password
      },
    });

    let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // the email address where you want to receive messages
      subject: `Message from ${name}`,
      text:message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
};

export default sendEmail;
