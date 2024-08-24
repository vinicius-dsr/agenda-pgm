import EstablishmentItem from "@/components/EstablishmentItem";
import Header from "@/components/Header";
import { db } from "@/lib/prisma";

interface CategoryProps {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({
  params: { slug },
}: CategoryProps) {
  const category = await db.category.findUnique({
    where: {
      slug,
    },
    include: {
      establishments: true,
    },
  });

  return (
    <>
      <Header />
      <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-4 py-6 md:px-0">
        <h1 className="py-2 text-center text-xl font-medium md:py-4 md:text-2xl">
          {category?.name}
        </h1>
        <div className="grid grid-cols-1 gap-5 py-6 md:grid-cols-3 md:gap-4">
          {category?.establishments.map((establishment) => (
            <EstablishmentItem
              key={establishment.id}
              establishment={establishment}
            />
          ))}
        </div>
      </div>
    </>
  );
}
