import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const degreeName = searchParams.get('degreeName');

  // try {
  //   if (!degreeName) throw new Error('Degree name required');
  //   await sql`INSERT INTO Degrees (Name) VALUES (${degreeName});`;
  // } catch (error) {
  //   return NextResponse.json({ error }, { status: 500 });
  // }

  const pets = await sql`SELECT * FROM Degrees;`;
  return NextResponse.json({ pets }, { status: 200 });
}
