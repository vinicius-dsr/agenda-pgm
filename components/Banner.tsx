"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const bannerImage = [
  {
    name: "banner 1",
    src: "/banner.png",
    href: "https://wa.me/5591992761377?text=Ol%C3%A1,%20vim%20pela%20Agenda%20Paragominas",
    target: "_blank",
  },
  {
    name: "banner 2",
    src: "/banner-2.png",
    href: "/",
    target: "_self",
  },
  {
    name: "banner 3",
    src: "/banner-3.png",
    href: "/",
    target: "_self",
  },
];

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
        {bannerImage.map((banner, index) => (
          <CarouselItem key={index}>
            <div
              className="relative h-[150px] w-full rounded-md hover:cursor-pointer md:min-h-[520px]"
              onClick={() => window.open(`${banner.href}`, `${banner.target}`)}
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
