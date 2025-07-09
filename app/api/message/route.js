// app/api/message/route.js
import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongodb";
import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        message: String,
        submittedAt: {
            type: Date,
            default: Date.now, // Automatically sets current time
        },
    },
);

const Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);

export async function POST(req) {
    try {
        await connectMongo();
        const body = await req.json();
        
        await Message.create(body);

        return NextResponse.json({ success: true, message: "Message saved." }, { status: 200 });
    } catch (err) {
        console.error("Error saving message:", err);
        return NextResponse.json({ success: false, message: "Failed to save." }, { status: 500 });
    }
}
