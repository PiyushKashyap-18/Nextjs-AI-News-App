// src/lib/webhooks/trigger-reel-webhook.ts

interface WebhookPayload {
    event: string;
    timestamp: string;
    currentReelId?: string;
    currentReelTitle?: string;
}

export async function triggerReelWebhook(payload: WebhookPayload) {
    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
        console.warn("NEXT_PUBLIC_WEBHOOK_URL is not defined. Webhook will not be triggered.");
        return;
    }

    try {
        console.log("Triggering webhook with payload:", payload);
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            console.log('Webhook triggered successfully!');
            const data = await response.json();
            console.log('Webhook response:', data);
        } else {
            console.error('Failed to trigger webhook:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error triggering webhook:', error);
    }
}