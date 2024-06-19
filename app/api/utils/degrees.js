import { sql } from '@vercel/postgres';

export async function getDegrees() {
    const degrees = await sql`SELECT degreeid, degreename FROM Degrees;`;
    return degrees.rows
}

export async function getMajors(degreeID) {
    const majors  = await sql`SELECT majorid, majorname from Majors where degreeid=${degreeID};`
    return majors.rows
}

export async function getUnits(searchUnit) {

    const shouldSearch = searchUnit !== undefined && searchUnit !== "" && searchUnit !== null;

    var majors = undefined;

    if (shouldSearch) {
        const param = `%${searchUnit}%`
        majors = await sql`SELECT uoscode, uostitle from Units where uoscode like ${param} limit 10;`

    } else {
        majors = await sql`SELECT uoscode, uostitle from Units limit 10;`
    }
    return majors.rows
}
