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
      <div className="">
        <div className="relative mx-auto h-[300px] w-full">
          <Image src={establishment?.imageUrl} alt={establishment?.name} fill />
        </div>
      </div>
    </>
  );
}
