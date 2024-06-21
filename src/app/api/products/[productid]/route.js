import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from '../../lib/db';
import { Product } from "../../lib/modal/product";

export async function GET(req, content) {
    let result
    const filter = { _id: content.params.productid }
    try {
        await mongoose.connect(connectionStr)
        result = await Product.findById(filter)
    } catch (error) {
        return NextResponse.json({ error: error, success: false })
    }
    return NextResponse.json(result)
}


export async function PUT(req, content) {
    let result
    const filter = { _id: content.params.productid }
    const payload = await req.json()
    try {
        await mongoose.connect(connectionStr)
        result = await Product.findOneAndUpdate(filter, payload)
    } catch (error) {
        return NextResponse.json({ error: error, success: false })
    }
    return NextResponse.json(result)
}
export async function DELETE(req, content) {
    let result
    const filter = { _id: content.params.productid }
    try {
        await mongoose.connect(connectionStr)
        result = await Product.deleteOne(filter)
    } catch (error) {
        return NextResponse.json({ error: error, success: false })
    }
    return NextResponse.json(result)
}

