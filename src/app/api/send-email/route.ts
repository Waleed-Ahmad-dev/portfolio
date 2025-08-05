import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import validator from 'validator';

// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
     throw new Error('Missing email credentials in environment variables');
}

const transporter = nodemailer.createTransport({
     service: 'Gmail',
     auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
     },
});


export async function POST(request: Request) {
     try {
          const { name, email, message } = await request.json();

          // Validate input data
          if (!name || !email || !message) {
               return new NextResponse('All fields are required', { status: 400 });
          }
          if (request.headers.get('origin') !== process.env.NEXT_PUBLIC_BASE_URL) {
               return new NextResponse('Forbidden', { status: 403 });
          }

          if (!validator.isEmail(email)) {
               return new NextResponse('Invalid email address', { status: 400 });
          }

          // Sanitize inputs
          const sanitizedName = validator.escape(name);
          const sanitizedEmail = validator.normalizeEmail(email);
          const sanitizedMessage = validator.escape(message);

          if (!sanitizedEmail) {
               return new NextResponse('Invalid email address', { status: 400 });
          }

               const mailOptions = {
                    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
                    to: 'itswaleedqureshi@gmail.com',
                    subject: `New message from ${sanitizedName}`,
                    text: `
                         Name: ${sanitizedName}
                         Email: ${sanitizedEmail}
                         Message: ${sanitizedMessage}
                         `,
                         html: `
                         <p><strong>Name:</strong> ${sanitizedName}</p>
                         <p><strong>Email:</strong> ${sanitizedEmail}</p>
                         <p><strong>Message:</strong> ${sanitizedMessage}</p>
                         `,
               };

          await transporter.sendMail(mailOptions);
          return NextResponse.json({ success: true });
     } catch (error) {
          console.error('Email sending error:', error);
          return new NextResponse('Internal server error', { status: 500 });
     }
}