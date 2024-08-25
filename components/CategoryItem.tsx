import { Category } from "@prisma/client";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

export default function CategoryItem({ category }: CategoryItemProps) {
  return (
    <>
      <Link
        href={`/categories/${category.slug}`}
        className={buttonVariants({ variant: "outline" })}
      >
        {category.name}
      </Link>
    </>
  );
}
