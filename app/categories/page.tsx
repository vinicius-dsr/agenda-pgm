import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function CategoriesPage() {
  const category = await db.category.findMany({
    orderBy: [
      {
        name: "asc",
      },
    ],
  });
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-lg px-4 py-6 md:px-0">
        <h2 className="py-2 text-center text-xl font-medium md:py-4 md:text-2xl">
          Categorias
        </h2>
        <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
          {category.map((category) => (
            <Link key={category.id} href={`/categories/${category.slug}`}>
              <Card className="">
                <CardContent className="p-1">
                  <div className="relative h-[150px] w-full rounded-md bg-primary">
                    <Image
                      src={category.icon}
                      alt={category.name}
                      fill
                      className="object-contain py-4 invert"
                    />
                  </div>
                  <div className="py-2">
                    <h2 className="text-center text-base font-medium md:text-lg">
                      {category.name}
                    </h2>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
