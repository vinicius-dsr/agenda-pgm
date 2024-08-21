import { Category } from "@prisma/client";
import Link from "next/link";
import { Button } from "./ui/button";

interface CategoryItemProps {
  category: Category;
}

export default function CategoryItem({ category }: CategoryItemProps) {
  return (
    <>
      <Button variant="outline" className="border-[#ccc} shadow-sm">
        {category.name}
      </Button>
    </>
  );
}
