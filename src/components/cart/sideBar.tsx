"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { UseCartStore } from "@/stores/cartStore";
import { CartItem } from "./item";
import { useState } from "react";
import { CheckoutDialog } from "../checkout/dialog";

export function CartSidebar() {
  const [checkouOpen, setCheckouOpen] = useState(false);
  const { cart } = UseCartStore((state) => state);

  let subtotal = 0;
  for (let item of cart) {
    subtotal += item.quantity * item.product.price;
  }

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="relative">
            <RocketIcon className="mr-2" />
            <p>Carrinho</p>
            {cart.length > 0 && (
              <div className="absolute size-3 bg-red-600 rounded-full -right-1 -top-1"></div>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <div className="flex flex-col gap-5 my-3">
                {cart.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between items-center text-xs">
                <div>Subtotal: </div>
                <div>R$ {subtotal.toFixed(2)}</div>
              </div>

              <Separator className="my-4" />

              <div className="text-center">
                <Button
                  onClick={() => setCheckouOpen(true)}
                  disabled={cart.length === 0}
                >
                  Finalizar Compra
                </Button>
              </div>
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
        <CheckoutDialog open={checkouOpen} onOpenChange={setCheckouOpen} />
      </Sheet>
    </div>
  );
}
