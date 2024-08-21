import { db } from "@/lib/prisma";
import CategoryItem from "./CategoryItem";

export default async function CategoryList() {
  const category = await db.category.findMany({});
  return (
    <div className="mx-auto flex max-w-screen-xl items-center gap-4 overflow-x-scroll px-4 md:px-0 [&::-webkit-scrollbar]:hidden">
      {category.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
