import PhoneItem from "@/components/PhoneItem";
import { buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { cn } from "@/lib/utils";
import { Clock, MapPin } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface EstablishmentProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: EstablishmentProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const establishment = await db.establishment.findUnique({
    where: {
      slug: params.slug,
    },
  });
  const previousImages = (await parent).openGraph?.images || [];
  const title = establishment?.name;
  const desc = establishment?.description;
  const imageUrl = establishment?.imageUrl;
  return {
    title: title,
    description: desc,
    openGraph: {
      images: [
        ...(imageUrl ? [imageUrl] : []), // Só adiciona imageUrl se não for undefined
        ...previousImages,
      ],
    },
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
    <div className="mx-auto mb-10 flex max-w-screen-xl flex-col gap-6 px-4 py-6 md:flex-row md:px-0 md:py-10">
      <div className="flex min-w-[70%] flex-col gap-4 md:max-w-[70%]">
        <div className="relative h-[350px] w-full px-0">
          <Image
            src={establishment.imageUrl}
            fill
            alt={establishment.name}
            className="rounded-md object-cover"
          />
        </div>
        <div className="py-4">
          <div className="flex items-center justify-between">
            <h2 className="mb-2 text-xl font-semibold md:text-2xl">
              {establishment.name}
            </h2>

            <span className="mr-1 hidden items-center gap-2 font-medium md:flex">
              <Clock size={18} /> {establishment.operation}
            </span>
          </div>
          <span className="inline-flex items-center gap-2 text-sm md:text-base">
            <MapPin size={18} /> {establishment.address}
          </span>
          <span className="mr-1 flex items-center gap-2 text-sm md:hidden">
            <Clock size={18} /> {establishment.operation}
          </span>
        </div>
        <hr />
        <div className="py-4">
          <p className="text-primary/80">{establishment.description}</p>
        </div>
        <hr className="block md:hidden" />
      </div>

      <div className="flex w-auto flex-col gap-4 md:min-w-[30%] md:max-w-[30%]">
        <div className="flex flex-col gap-4 px-0 md:px-3">
          <div className="mb-2 flex flex-col gap-4">
            <h3 className="text-lg font-medium text-primary">Locais</h3>
            <div className="w-full">
              {establishment.mapsUrl.map((local) => (
                <Link
                  key={local}
                  href={local}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "w-full",
                  )}
                >
                  Acessar no Google Maps
                </Link>
              ))}
            </div>
          </div>
          <div className="py-4">
            <h3 className="mb-2 text-lg font-medium text-primary">Contato</h3>
            <div>
              {establishment.phones.map((phone) => (
                <PhoneItem key={phone} phone={phone} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
