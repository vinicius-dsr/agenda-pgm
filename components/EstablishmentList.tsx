import { db } from "@/lib/prisma";
import EstablishmentItem from "./EstablishmentItem";

export default async function EstablishmentList() {
  const establishment = await db.establishment.findMany({});

  return (
    <div className="mx-auto flex max-w-screen-xl gap-4 overflow-auto px-4 py-6 md:px-0 [&::-webkit-scrollbar]:hidden">
      {establishment.map((establishment) => (
        <EstablishmentItem
          key={establishment.id}
          establishment={establishment}
        />
      ))}
    </div>
  );
}
