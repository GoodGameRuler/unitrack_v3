import { NextResponse } from 'next/server';
import { getMajors } from '../utils/degrees';

export async function GET(request) {
    const majors = await getMajors(parseInt(request.nextUrl.searchParams.get("degreeID")))
    return NextResponse.json({ data: majors }, { status: 200 });
}
