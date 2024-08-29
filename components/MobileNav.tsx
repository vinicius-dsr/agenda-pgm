import { Home, LayoutList, Menu } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Button, buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 text-white hover:bg-transparent hover:text-white"
        >
          <Menu size={26} />
        </Button>
      </SheetTrigger>
      <SheetContent className="border-primary/80 bg-primary">
        <SheetHeader>
          <h2 className="text-left font-medium uppercase text-white">Menu</h2>
        </SheetHeader>
        <div className="mt-4 flex w-full flex-col gap-2 py-4 text-white">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "flex w-full items-center justify-start gap-4 px-0 text-base",
            )}
          >
            <Home size={18} /> Início
          </Link>
          <Link
            href="/categories"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "flex w-full items-center justify-start gap-4 px-0 text-base",
            )}
          >
            <LayoutList size={18} /> Categorias
          </Link>
          <Link
            href="https://wa.me/5591992761377?text=Ol%C3%A1,%20vim%20pela%20Agenda%20Paragominas"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "flex w-full items-center justify-start gap-4 px-0 text-base",
            )}
          >
            <FaWhatsapp size={18} /> Fale conosco
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
