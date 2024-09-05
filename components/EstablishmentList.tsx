import { db } from "@/lib/prisma";
import EstablishmentItem from "./EstablishmentItem";

export default async function EstablishmentList() {
  const establishment = await db.establishment.findMany({
    take: 6,
  });

  return (
    <div className="flex gap-4 overflow-auto px-4 md:px-0 [&::-webkit-scrollbar]:hidden">
      {establishment.map((establishment) => (
        <EstablishmentItem
          key={establishment.id}
          establishment={establishment}
        />
      ))}
    </div>
  );
}
