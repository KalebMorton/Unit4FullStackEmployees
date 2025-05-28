import db from "./client.js";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  await createEmployee("Zargothrax", "1666-06-06", 666)
  await createEmployee("Ben Dover", "1969-06-09", 80085)
  await createEmployee("Angus Mcfife", "1993-01-13", 777)
  await createEmployee("Heavy Weapons Guy TF2", "1970-02-02", 2)
  await createEmployee("John Helldiver", "2024-02-08", 710)
  await createEmployee("Sans Undertale", "1010-01-01", 0)
  await createEmployee("General Brasch", "2015-03-03", 710)
  await createEmployee("Tim", "2001-01-01", 11)
  await createEmployee("Jim", "2002-02-02", 22)
  await createEmployee("Kim", "2003-03-03", 33)
}
