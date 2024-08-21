import { Establishment } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface EstablishmentProps {
  establishment: Establishment;
}
export default function EstablishmentItem({
  establishment,
}: EstablishmentProps) {
  return (
    <Card className="min-w-[200px]">
      <CardContent className="p-0 px-1 pt-1">
        <div className="relative h-[200px] w-full">
          <Image
            src={establishment.imageUrl}
            alt={establishment.name}
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 px-1 py-3">
          <h3 className="truncate text-base font-semibold">
            {establishment.name}
          </h3>
          <p className="truncate text-sm">{establishment.address}</p>
          <Button variant="secondary" className="mt-3 w-full">
            Ver mais
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
