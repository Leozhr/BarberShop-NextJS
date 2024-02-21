import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

type BarberShopProps = {
  barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarberShopProps) => {
  return (
    <Card className="min-w-[160px] max-w-[160px] rounded-2xl">
      <CardContent className="p-1">
        <div className="relative w-full h-[160px]">
          <div className="absolute top-3 left-3 z-50">
            <Badge variant={"secondary"} className="flex items-center gap-1 opacity-90">
              <StarIcon size={12} className="fill-primary text-primary" />
              <span className="text-xs">5,0</span>
            </Badge>
          </div>
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            fill
            sizes="100vw"
            className="rounded-[12px] object-cover"
          />
        </div>
        <div className="px-2 pt-1">
          <h2 className="font-bold overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button variant={"secondary"} className="mt-3 mb-2 w-full">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopItem;