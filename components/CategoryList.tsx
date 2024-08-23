import { db } from "@/lib/prisma";
import CategoryItem from "./CategoryItem";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default async function CategoryList() {
  const category = await db.category.findMany({
    take: 10,
    orderBy: [
      {
        name: "asc",
      },
    ],
  });
  return (
    <div className="flex items-center gap-4 overflow-auto px-4 md:px-0 [&::-webkit-scrollbar]:hidden">
      {category.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
      <Link
        href="/categories"
        className={buttonVariants({ variant: "secondary" })}
      >
        Ver todos <ArrowRightIcon size={13} className="ml-2" />
      </Link>
    </div>
  );
}
