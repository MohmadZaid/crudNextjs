import { promises as fsPromises } from 'fs';
const { writeFile } = fsPromises;
import { NextResponse } from "next/server";



export async function POST(req) {
    const data = await req.formData();
    const file = data.get('file');
    console.log(data);
    console.log(file);
    if (!file) {
        return NextResponse.json({ "message": "No Image Found", success: false })
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/${file.name}`;
    await writeFile(path, buffer);
    return NextResponse.json({ "message": "Image uploaded successfully", success: true })
}