// app/api/visit/route.js
import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongodb";
import mongoose from "mongoose";

const VisitSchema = new mongoose.Schema({
    count: { type: Number, default: 0 },
});

const Visit = mongoose.models.Visit || mongoose.model("Visit", VisitSchema);

export async function GET() {
    await connectMongo();

    let doc = await Visit.findOne();
    if (!doc) {
        doc = await Visit.create({ count: 1 });
    } else {
        doc.count += 1;
        await doc.save();
    }

    return NextResponse.json({ count: doc.count });
}
