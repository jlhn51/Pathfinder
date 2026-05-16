import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@/db";
import { users } from "@/db/schema";

export async function POST(req: Request) {
    const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;
    if (!SIGNING_SECRET) {
        throw new Error("CLERK_WEBHOOK_SIGNING_SECRET is not set in .env")
    }

    const headerPayload = await headers();
    const svixId = headerPayload.get("svix-id");
    const svixTimeStamp = headerPayload.get("svix-timestamp");
    const svixSignature = headerPayload.get("svix-signature");

    if (!svixId || !svixTimeStamp || !svixSignature) {
        return new Response("Missing svix headers", { status: 400 });
    }

    const payload = await req.json();
    const body = JSON.stringify(payload);

    const wh = new Webhook(SIGNING_SECRET);
    let evt: WebhookEvent;
    try {
        evt = wh.verify(body, {
            "svix-id": svixId,
            "svix-timestamp": svixTimeStamp,
            "svix-signature": svixSignature,
        }) as WebhookEvent;
    } catch (err) {
        console.error("Webhook verification failed:", err);
        return new Response("Invalid signature", { status: 400 });
    }

    if (evt.type === "user.created") {
        const { id, email_addresses } = evt.data;
        const primaryEmail = email_addresses[0]?.email_address;

        if (!primaryEmail) {
            return new Response("No email on user", { status: 400 });
        }

        await db.insert(users).values({
            clerkId: id,
            email: primaryEmail,
        });

        console.log(`Created user in DB: ${id}`);
    }

    return new Response("OK", { status: 200 });
}