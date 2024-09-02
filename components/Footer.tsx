import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t-primary/80 bg-primary py-6">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 md:px-0">
        <div>
          <Link
            href="https://www.vinidev.tech"
            target="_blank"
            className="font-medium text-muted-foreground"
          >
            &copy; Vinícius Reis
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-muted-foreground bg-transparent px-3 hover:bg-muted-foreground/60",
            )}
          >
            <ArrowUp className="text-muted-foreground hover:text-white/80" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
