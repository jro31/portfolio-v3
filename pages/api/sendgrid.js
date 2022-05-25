import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (req, res) => {
  try {
    await sendgrid.send({
      to: process.env.GMAIL_EMAIL_ADDRESS,
      from: process.env.CONTACT_FORM_EMAIL_ADDRESS,
      subject: '[jethrowilliams.com contact form]',
      html: `
        <div>First name: <span style='font-weight: bold'>${req.body.enteredFirstName}</span></div>
        <div>Last name: <span style='font-weight: bold'>${req.body.enteredLastName}</span></div>
        <div>Email: <span style='font-weight: bold'>${req.body.enteredEmail}</span></div>
        <div>Phone: <span style='font-weight: bold'>${req.body.enteredPhone}</span></div>
        <div>Available times: <span style='font-weight: bold'>${req.body.enteredAvailableTimes}</span></div>
        <div>Message: <span style='font-weight: bold'>${req.body.enteredMessage}</span></div>
      `,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error_message: error.message });
  }

  return res.status(200).json({ success: true });
};

export default sendEmail;
