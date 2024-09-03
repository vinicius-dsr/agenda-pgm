// import { Category, Establishment } from "@prisma/client";
// import { MetadataRoute } from "next";

// interface SiteMapProps {
//   establishment: Establishment;
//   category: Category;
// }

// export default function sitemap({
//   category,
//   establishment,
// }: SiteMapProps): MetadataRoute.Sitemap {
//   return [
//     {
//       url: "https://agenda-pgm.vercel.app/",
//       lastModified: new Date(),
//       changeFrequency: "yearly",
//       priority: 1,
//     },
//     {
//       url: "https://agenda-pgm.vercel.app/categories",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },
//     {
//       url: `https://agenda-pgm.vercel.app/categories/${category.slug}`,
//       lastModified: new Date(),
//       changeFrequency: "yearly",
//       priority: 1,
//     },
//     {
//       url: "https://agenda-pgm.vercel.app/establishment",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//     {
//       url: `https://agenda-pgm.vercel.app/establishment/${establishment.slug}`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },
//     {
//       url: "https://agenda-pgm.vercel.app/suggestions",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },
//   ];
// }
import { db } from "@/lib/prisma"; // Certifique-se de ajustar o caminho de importação
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories = await db.category.findMany();
  const establishments = await db.establishment.findMany();

  const staticRoutes = [
    {
      url: "https://agenda-pgm.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly" as const, // Ajuste aqui
      priority: 1,
    },
    {
      url: "https://agenda-pgm.vercel.app/establishment",
      lastModified: new Date(),
      changeFrequency: "yearly" as const, // Ajuste aqui
      priority: 1,
    },
    {
      url: "https://agenda-pgm.vercel.app/categories",
      lastModified: new Date(),
      changeFrequency: "monthly" as const, // Ajuste aqui
      priority: 0.8,
    },
    {
      url: "https://agenda-pgm.vercel.app/suggestions",
      lastModified: new Date(),
      changeFrequency: "monthly" as const, // Ajuste aqui
      priority: 0.8,
    },
  ];

  const dynamicRoutes = [
    ...establishments.map((establishment) => ({
      url: `https://agenda-pgm.vercel.app/establishment/${establishment.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const, // Ajuste aqui
      priority: 1,
    })),
    ...categories.map((category) => ({
      url: `https://agenda-pgm.vercel.app/categories/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const, // Ajuste aqui
      priority: 1,
    })),
  ];

  return [...staticRoutes, ...dynamicRoutes];
}
