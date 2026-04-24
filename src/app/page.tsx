import { db } from "@/db";
import { targetRoles } from "@/db/schema";

export default async function Home() {
  const roles = await db.select().from(targetRoles);

  return (
    <main className="min-h-screen bg-white px-6 py-24">
      <h1 className="text-center text-4xl font-bold text-gray-900">
        Pathfinder
      </h1>
      <p className="mt-4 text-center text-gray-600">
        Target roles currently in the database:
      </p>
      <ul className="mx-auto mt-8 max-w-md space-y-2">
        {roles.map((role) => (
          <li
            key={role.id}
            className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
            <span className="font-semibold">{role.company}</span> · {role.name}
          </li>
        ))}
      </ul>
    </main>
  );
}