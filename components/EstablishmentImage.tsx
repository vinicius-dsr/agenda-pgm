import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogImage,
  DialogContainer,
} from "@/components/core/dialog";
import { Establishment } from "@prisma/client";
import { XIcon } from "lucide-react";

interface EstablishmentImagaProps {
  establishment: Establishment;
}

export function EstablishmentImage({ establishment }: EstablishmentImagaProps) {
  return (
    <Dialog
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <DialogTrigger>
        <DialogImage
          src={establishment.imageUrl}
          alt={establishment.name}
          className="h-[350px] w-full rounded-[4px] object-cover"
        />
      </DialogTrigger>
      <DialogContainer>
        <DialogContent className="relative">
          <DialogImage
            src={establishment.imageUrl}
            alt={establishment.name}
            className="h-auto w-auto max-w-[90vw] rounded-[4px] object-cover lg:h-[90vh]"
          />
        </DialogContent>
        <DialogClose
          className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </DialogClose>
      </DialogContainer>
    </Dialog>
  );
}
