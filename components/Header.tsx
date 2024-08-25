"use client";

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Button, buttonVariants } from "./ui/button";
import { LayoutList, Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };
  return (
    <header className="sticky top-0 z-10 mx-auto w-full bg-primary py-4 shadow-md md:py-6">
      <div className="mx-auto max-w-screen-xl px-4 md:px-0">
        {/* header desktop */}
        <div className="hidden justify-between gap-4 md:flex">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={200} height={150} />
          </Link>
          <SearchBar />
          <Link
            href="/categories"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "flex items-center gap-2 text-white",
            )}
          >
            <LayoutList size={17} />
            <span>Categorias</span>
          </Link>
          <Link
            href=""
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "flex items-center gap-2 text-white",
            )}
          >
            <FaWhatsapp size={17} />
            Vale conosco
          </Link>
        </div>

        {/* Header mobile */}
        <div className="flex flex-col gap-4 pb-1 md:hidden">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={150} height={150} />
            </Link>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                className="text-white hover:bg-transparent hover:text-white"
                onClick={toggleSearchBar}
              >
                {showSearchBar ? <X size={26} /> : <Search size={26} />}
              </Button>
              <Button
                variant="ghost"
                className="px-0 text-white hover:bg-transparent hover:text-white"
              >
                <Menu size={26} />
              </Button>
            </div>
          </div>
          {showSearchBar && <SearchBar />}
        </div>
      </div>
    </header>
  );
}
