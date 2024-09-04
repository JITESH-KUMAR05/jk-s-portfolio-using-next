import { Resend } from 'resend';
import EmailTemplate from '@/components/EmailTemplate';
import ReactDOMServer from 'react-dom/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  const emailHtml = ReactDOMServer.renderToStaticMarkup(<EmailTemplate firstName="John" />);

  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello world',
    html: emailHtml,
  });

  if (error) {
    return res.status(400).json(error);
  }

  return res.status(200).json(data);
}