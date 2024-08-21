import { db } from "@/lib/prisma";
import CategoryItem from "./CategoryItem";

export default async function CategoryList() {
  const category = await db.category.findMany({});
  return (
    <div className="flex items-center gap-4 overflow-auto px-4 md:px-0 [&::-webkit-scrollbar]:hidden">
      {category.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
