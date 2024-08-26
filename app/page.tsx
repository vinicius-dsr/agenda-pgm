import CategoryList from "@/components/CategoryList";
import EstablishmentList from "@/components/EstablishmentList";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner */}
      <div className="mx-auto max-w-screen-xl px-4 py-4 md:px-0 md:py-6">
        <Image
          src="/banner.png"
          alt=""
          width={800}
          height={800}
          className="h-auto w-full rounded-md object-contain"
        />
      </div>

      {/* Category List */}
      <div className="mx-auto block max-w-screen-xl md:hidden">
        <CategoryList />
      </div>

      {/* Establishment List */}

      <div className="mx-auto max-w-screen-xl py-6">
        <div className="mb-4 flex items-center justify-between px-4 md:px-0">
          <h2 className="text-base font-medium md:text-lg">Órgãos públicos</h2>
          <Link
            href="/categories/orgaos-publicos"
            className="text-sm text-muted-foreground transition-all hover:text-black hover:underline"
          >
            Ver tudo
          </Link>
        </div>
        <EstablishmentList />
      </div>
    </>
  );
}
