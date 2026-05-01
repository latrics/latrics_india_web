import nodemailer from 'nodemailer';
import { config } from '../config/env.js';

const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: config.smtp.port === 465, // true for 465, false for other ports
  auth: {
    user: config.smtp.user,
    pass: config.smtp.pass,
  },
});

export const sendLeadsEmail = async (csvData) => {
  const mailOptions = {
    from: config.email.from,
    to: config.email.to,
    subject: 'Daily Leads Report',
    text: 'Please find the attached daily leads report.',
    attachments: [
      {
        filename: `leads_report_${new Date().toISOString().split('T')[0]}.csv`,
        content: csvData,
      },
    ],
  };

  return transporter.sendMail(mailOptions);
};
