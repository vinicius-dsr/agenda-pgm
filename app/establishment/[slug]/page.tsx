import Header from "@/components/Header";
import { db } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";

interface EstablishmentProps {
  params: {
    slug: string;
  };
}

export default async function EstablishmentPage({
  params,
}: EstablishmentProps) {
  const establishment = await db.establishment.findUnique({
    where: {
      slug: params.slug,
    },
  });
  if (!establishment) {
    return notFound();
  }
  return (
    <>
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-6 md:px-0">
        {/* Image */}
        <div className="relative h-[350px] w-full">
          <Image
            src={establishment.imageUrl}
            fill
            alt={establishment.name}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
}
