import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    // Prevents Caching
    noStore();

    const degrees = await sql`SELECT degreeid, degreename FROM Degrees;`;
    return NextResponse.json({ data: degrees["rows"] }, { status: 200 });
}
