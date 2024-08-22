import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex w-full items-center">
      <Input
        placeholder="Pesquisar estabelecimento..."
        className="py-[1.4rem]"
      />
      <Button variant="ghost" className="-ml-14">
        <Search />
      </Button>
    </div>
  );
}
