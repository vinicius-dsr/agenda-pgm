import EstablishmentItem from "@/components/EstablishmentItem";
import Header from "@/components/Header";
import { db } from "@/lib/prisma";
import { Frown, HeartCrack } from "lucide-react";
import { notFound } from "next/navigation";

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

  if (!category) {
    return notFound();
  }
  return (
    <div className="mx-auto mb-20 flex max-w-screen-xl flex-col gap-4 px-4 py-6 md:mb-10 md:px-0">
      <h1 className="py-2 text-center text-xl font-medium text-primary md:py-4 md:text-2xl">
        {category?.name}
      </h1>
      {category.establishments.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-60 md:py-48">
          <div className="flex flex-col items-center gap-4 text-lg font-medium text-muted-foreground">
            <HeartCrack size={32} />
            <span className="">Ainda não há estabelecimentos...</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 py-6 md:grid-cols-3 md:gap-4">
          {category?.establishments.map((establishment) => (
            <EstablishmentItem
              key={establishment.id}
              establishment={establishment}
            />
          ))}
        </div>
      )}
    </div>
  );
}
