"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const bannerImage = [
  {
    name: "banner 1",
    src: "/banner.png",
  },
  {
    name: "banner 2",
    src: "/banner-2.png",
  },
  {
    name: "banner 3",
    src: "/banner-3.png",
  },
  {
    name: "banner 4",
    src: "/banner-4.png",
  },
];

const handleRedirectClick = {};

export default function Banner() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );
  return (
    <Carousel
      className="w-full"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {bannerImage.map((banner) => (
          <CarouselItem key={banner.name}>
            <div
              className="relative h-[150px] w-full rounded-md hover:cursor-pointer md:min-h-[520px]"
              onClick={() =>
                window.open(
                  "https://wa.me/5591992761377?text=Ol%C3%A1,%20vim%20pela%20Agenda%20Paragominas",
                  "_blank",
                )
              }
            >
              <Image
                src={banner.src}
                alt={banner.name}
                fill
                className="rounded-md object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
