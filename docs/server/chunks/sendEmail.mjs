import { d as defineEventHandler, r as readBody, u as useRuntimeConfig } from './nitro/node-server.mjs';
import { MailerSend, Sender, Recipient, EmailParams } from 'mailersend';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const sendEmail = defineEventHandler(async (event) => {
  const form = await readBody(event);
  const { mailerSendApiKey } = useRuntimeConfig();
  const mailerSend = new MailerSend({
    apiKey: mailerSendApiKey
  });
  const sentFrom = new Sender(form.email, "Your name");
  const recipients = [
    new Recipient("raiggors.mia@gmail.com", "Your Client")
  ];
  const emailParams = new EmailParams().setFrom(sentFrom).setTo(recipients).setReplyTo(sentFrom).setSubject(form.title).setHtml("<strong>This is the HTML content</strong>").setText(form.message);
  try {
    await mailerSend.email.send(emailParams);
    return { message: "Email sent successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to send email" };
  }
});

export { sendEmail as default };
//# sourceMappingURL=sendEmail.mjs.map
