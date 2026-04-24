import "dotenv/config";
import { db } from "./index";
import { targetRoles } from "./schema";

async function seed() {
    console.log("Seeding target roles...")

    await db.insert(targetRoles).values([
        { name: "SWE Intern", company: "Meta"},
        { name: "SWE Intern", company: "Google"},
        { name: "SDE Intern", company: "Amazon"},
        { name: "SWE Intern", company: "Microsoft"},
        { name: "SWE Intern", company: "Apple"},
    ]);

    console.log("Done.")
    process.exit(0);
}

seed().catch((err) => {
    console.error(err);
    process.exit(1);
});