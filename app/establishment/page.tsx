import EstablishmentItem from "@/components/EstablishmentItem";
import Header from "@/components/Header";
import { db } from "@/lib/prisma";
import { HeartCrack } from "lucide-react";

interface EstablishmentSearchProps {
  searchParams: {
    search?: string;
  };
}

export default async function EstablishSearchPage({
  searchParams,
}: EstablishmentSearchProps) {
  const establishments = await db.establishment.findMany({
    where: {
      name: {
        contains: searchParams?.search,
        mode: "insensitive",
      },
    },
  });
  return (
    <div className="mx-auto mb-6 flex h-full max-w-screen-xl flex-col gap-4 px-4 py-6 md:px-0">
      {establishments.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-72 md:py-56">
          <div className="flex flex-col items-center gap-4 text-lg font-medium text-muted-foreground">
            <HeartCrack size={32} />
            <span>Nenhum resultado para &quot;{searchParams.search}&quot;</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h2 className="text-lg">
            Resultados para &quot;{searchParams.search}&quot;
          </h2>
          <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
            {establishments.map((establishments) => (
              <EstablishmentItem
                key={establishments.id}
                establishment={establishments}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
