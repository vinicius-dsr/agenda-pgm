import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="md: mx-auto w-full bg-primary py-4 md:py-6">
      <div className="mx-auto max-w-screen-xl px-4 md:px-0">
        {/* header desktop */}
        <div className="hidden items-center justify-between gap-4 md:flex">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={150} height={150} />
          </Link>
          <SearchBar />
        </div>

        <div className="flex flex-col gap-4 pb-2 md:hidden">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={150} height={150} />
            </Link>
            <Button variant="ghost" className="px-0 text-white">
              <Menu />
            </Button>
          </div>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
