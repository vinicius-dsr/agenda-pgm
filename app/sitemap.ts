import { Category, Establishment } from "@prisma/client";
import { MetadataRoute } from "next";

interface SitemapProps {
  category: Category;
  establishment: Establishment;
}

export default function sitemap({
  category,
  establishment,
}: SitemapProps): MetadataRoute.Sitemap {
  return [
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
      url: `https://agenda-pgm.vercel.app/establishment/${establishment.slug}`,
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
      url: `https://agenda-pgm.vercel.app/categories/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://agenda-pgm.vercel.app/suggestions",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
