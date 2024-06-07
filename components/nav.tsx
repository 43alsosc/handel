import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { ModeToggle } from "./ui/dark-mode";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between py-4 px-8">
      <div>
        <a href="/" className="text-xl font-bold">
          Handel
        </a>
      </div>
      <div className="flex gap-3">
        <Link href="/shoppingcart">
          <Button variant="outline">
            <ShoppingCart className="h-6 w-6" />
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
