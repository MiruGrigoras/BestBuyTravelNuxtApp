import { defineEventHandler, readBody } from 'h3';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";


export default defineEventHandler(async (event) => {
    const form = await readBody(event);
    const { mailerSendApiKey } = useRuntimeConfig();

    const mailerSend = new MailerSend({
        apiKey: mailerSendApiKey,
      });

    const sentFrom = new Sender(form.email, "Your name");

    const recipients = [
    new Recipient("raiggors.mia@gmail.com", "Your Client"),
    ];

    const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject(form.title)
    .setHtml("<strong>This is the HTML content</strong>")
    .setText(form.message);

    try {
        await mailerSend.email.send(emailParams);
        return { message: 'Email sent successfully' };
    } catch (error) {
        console.error(error);
        // Handle error appropriately
        return { error: 'Failed to send email' };
    }
});
