import { renderToReadableStream } from 'react-dom/server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { renderToStaticMarkup } from 'react-dom/server';
// Other import statements...

const resend = new Resend('re_L8giSZCs_3kdyutYsc29gyoD8ThtWymy2');

export async function POST(req: Request) {
    const { name, email, message } = await req.json();
    (resend as any).sendEmail({
        from: 'Acme <onboarding@resend.dev>',
        to: 'nwalia.ez@gmail.com',
        subject: 'hello world',
        text: JSON.stringify({ name, email, message }),
    });

    return NextResponse.json({
        status: 'ok',
    });
}
