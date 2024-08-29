import EstablishmentItem from "@/components/EstablishmentItem";
import Header from "@/components/Header";
import { db } from "@/lib/prisma";

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
    <>
      <Header />
      <div className="ga-4 mx-auto mb-6 flex max-w-screen-xl flex-col px-4 py-6 md:px-0">
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
    </>
  );
}
