"use client";

import { formatPhoneNumber } from "@/helpers/phone";
import { Smartphone } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";
import { Button, buttonVariants } from "./ui/button";
import { useState } from "react";
import copy from "clipboard-copy";

interface PhoneItemProps {
  phone: string;
}

export default function PhoneItem({ phone }: PhoneItemProps) {
  const handlerCopyClick = async (phone: string) => {
    try {
      await copy(phone);
      toast.success("Copiado!");
    } catch (err) {
      console.error(err);
      toast.error("Erro em copiar");
    }
  };
  return (
    <div className="justify flex justify-between" key={phone}>
      <div className="flex items-center gap-2">
        <Smartphone />
        <p className="text-sm">{phone}</p>
      </div>
      <div className="flex items-center gap-2 py-1">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => handlerCopyClick(phone)}
        >
          Copiar
        </Button>
        <Link
          href={`https://wa.me/55${formatPhoneNumber(phone)}?text=Ol%C3%A1,%20vim%20pela%20Agenda%20Paragominas`}
          target="_blank"
          className={buttonVariants({ variant: "secondary", size: "sm" })}
        >
          <FaWhatsapp />
        </Link>
      </div>
    </div>
  );
}
