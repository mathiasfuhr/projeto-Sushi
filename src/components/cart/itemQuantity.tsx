import { UseCartStore } from "@/stores/cartStore";
import { Cart } from "@/types/cart";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
  cartItem: Cart;
};

export const CartItemQuantity = ({ cartItem }: Props) => {
  const { upsertCartItem } = UseCartStore((state) => state);

  const handlePlusButton = () => {
    upsertCartItem(cartItem.product, 1);
  };

  const handleMinusButton = () => {
    upsertCartItem(cartItem.product, -1);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        size="icon"
        variant="outline"
        className="size-6"
        onClick={handlePlusButton}
      >
        <PlusIcon className="size-3" />
      </Button>
      <div className="text-xs">{cartItem.quantity}</div>
      <Button
        size="icon"
        variant="outline"
        className="size-6"
        onClick={handleMinusButton}
      >
        <MinusIcon className="size-3" />
      </Button>
    </div>
  );
};
