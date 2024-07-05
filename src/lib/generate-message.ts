import { UseCartStore } from "@/stores/cartStore";
import { useCheckoutStore } from "@/stores/checkouStore";

export const generateMessage = () => {
  const { name, address } = useCheckoutStore((state) => state);
  const { cart } = UseCartStore((state) => state);

  let orderProducts = [];
  for (let item of cart) {
    orderProducts.push(`${item.quantity}x ${item.product.name}`);
  }

  return `**Dados do cliente**
Nome: ${name}
Endereço: ${address.street}. ${address.number}, (${address.complement})
${address.district}, ${address.city}
----------

**Pedido**
${orderProducts.join("\n")}`;
};
