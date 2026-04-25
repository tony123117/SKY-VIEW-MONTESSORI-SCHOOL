import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { user_name, user_email, child_name, user_phone, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Brainchild Schools <onboarding@resend.dev>', // Use your verified domain here later
      to: ['arum200909@gmail.com'], // Where you want to receive the mail
      subject: `New Inquiry from ${user_name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Parent:</strong> ${user_name}</p>
        <p><strong>Child:</strong> ${child_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Phone:</strong> ${user_phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}