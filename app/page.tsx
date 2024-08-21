import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner */}
      <div className="mx-auto max-w-screen-xl px-4 py-4 md:px-0 md:py-6">
        <Image
          src="/Banner.png"
          alt=""
          width={500}
          height={500}
          className="h-auto w-full rounded-md object-contain"
        />
      </div>
    </>
  );
}
