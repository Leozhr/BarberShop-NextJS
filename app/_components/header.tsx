import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <header>
      <Card>
        <CardContent className="p-5 justify-between flex flex-row items-center">
          <Image src={"/logo.png"} alt={"logo"} width={120} height={22} />
          <Button variant={"outline"} size={"icon"}>
            <MenuIcon size={18} />
          </Button>
        </CardContent>
      </Card>
    </header>
  )
}

export default Header;