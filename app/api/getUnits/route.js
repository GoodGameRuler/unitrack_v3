import { NextResponse } from 'next/server';
import { getUnits } from '../utils/degrees';
import { unstable_noStore as noStore } from 'next/cache';

export async function GET(request) {
    // Prevents Caching
    noStore();

    const { searchParams } = new URL(request.url)
    const search = searchParams.get('searchUnit')

    const majors = await getUnits(search);
    return NextResponse.json({ data: majors }, { status: 200 });
}
