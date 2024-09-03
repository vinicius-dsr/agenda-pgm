import { Category, Establishment } from "@prisma/client";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories = await prisma.category.findMany();
  const establishments = await prisma.establishment.findMany();

  const staticRoutes = [
    {
      url: "https://agenda-pgm.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://agenda-pgm.vercel.app/establishment",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://agenda-pgm.vercel.app/categories",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://agenda-pgm.vercel.app/suggestions",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const dynamicRoutes = [
    ...establishments.map((establishment: Establishment) => ({
      url: `https://agenda-pgm.vercel.app/establishment/${establishment.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    })),
    ...categories.map((category: Category) => ({
      url: `https://agenda-pgm.vercel.app/categories/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    })),
  ];

  return [...staticRoutes, ...dynamicRoutes];
}
