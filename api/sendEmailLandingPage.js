import nodemailer from 'nodemailer';
import { WEBSITE_ID } from '../config.js';
import { PACKAGE } from '../config.js';
import supabase from '../services/supabase.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(400).json({ status: 'Method not allowed!' });
  }

  const { name, phone, message, cf_turnstile_token } = req.body;

  // Validation
  if (!name || !phone) {
    return res.status(400).json({ status: 'Missing required fields!' });
  }

  // Turnstile validation
  const responseToken = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET,
        response: cf_turnstile_token,
      }),
    },
  ).then((res) => res.json());

  if (!responseToken.success) {
    return res.status(400).json({ error: 'CAPTCHA verification failed!' });
  }

  // Determine the user's IP
  const forwardedFor = req.headers['x-forwarded-for'];
  const ip = forwardedFor
    ? forwardedFor.split(',')[0].trim()
    : req.socket?.remoteAddress;
  
  
  // Count how many submissions this IP made in the last 24 hours

  const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const { count: submissionsCount, error } = await supabase
    .from('submissions')
    .select('*', { count: 'exact', head: true })
    .eq('ip', ip)
    .eq('website_id', WEBSITE_ID)
    .gte('created_at', twentyFourHoursAgo.toISOString());

  if (error) {
    throw new Error(error.message);
  }

  if (submissionsCount >= 2) {
    return res.status(429).json({ status: 'Too many requests!' });
  }

  

  // Calculate the date in format dd/mm/YYYY - h:m:s
  const theDate = new Date();
  const localDate = theDate.toLocaleString('ro-RO', {
    timeZone: 'Europe/Bucharest',
  });

  // Send an email
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `Solicitare formular (pagina de aterizare) ${process.env.SMTP_FROM}`,
    to: process.env.RECEIVING_EMAIL,
    subject: `Solicitare formular ${localDate}`,
    html: `
        <h3>Solicitare formular de la ${name}</h3>
        <p>
            Nume: <strong>${name}</strong>
        </p>
        <p>
            Telefon: <strong>${phone}</strong>
        </p>
        <p>
            Mesaj: <strong>${message ? message : 'Necompletat'}</strong>
        </p>
    `,
  });

  const body = req.body;

  // Inserting the submission in the database
  const { data, errorInsert } = await supabase
    .from('submissions')
    .insert({ ...body, ip: ip, website_id: WEBSITE_ID, package: PACKAGE })
    .select();

  if (errorInsert) {
    throw new Error('There was an error inserting data in Supabase!');
  }

  res.status(200).json({ success: true });
}
