import { NextResponse } from 'next/server';
import { waitlistSchema } from '@/schemas/waitlist';

export async function POST(request: Request) {
    const body = await request.json();
    const { success, data, error } = waitlistSchema.safeParse(body);

    if (!success) {
        return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
    }

    const { email } = data;

    const brevoApiKey = process.env.BREVO_API_KEY;
    const brevoListId = process.env.BREVO_LIST_ID;

    if (!brevoApiKey || !brevoListId) {
        console.error('Brevo API key or List ID is not set in environment variables.');
        return NextResponse.json({ error: 'Could not process request. Server configuration error.' }, { status: 500 });
    }

    try {
        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': brevoApiKey,
            },
            body: JSON.stringify({
                email,
                listIds: [Number(brevoListId)],
                updateEnabled: true,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Brevo API Error:', errorData);
            return NextResponse.json({ error: 'Failed to subscribe.' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Successfully subscribed!' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
    }
}