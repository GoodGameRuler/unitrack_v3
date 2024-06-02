import { NextResponse } from 'next/server';

export async function GET() {
    // Prevents Caching
    noStore();

    return NextResponse.json({ error: "Not allowing API Access" }, { status: 500 })
}
