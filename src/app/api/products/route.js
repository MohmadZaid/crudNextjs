import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "../lib/db";
import { Product } from "../lib/modal/product";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await Product.find();
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json(data);
}
export async function POST(req) {
  let result;
  const payload = await req.json();
  try {
    await mongoose.connect(connectionStr);
    let product = new Product(payload);
    result = await product.save();
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to save product" },
      { status: 500 }
    );
  }
  return NextResponse.json(result);
}
