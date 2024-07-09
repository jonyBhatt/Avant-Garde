"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useCart from "@/hooks/UseCart";
import { customerOrder } from "@/lib/actions/user/order";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CartComponent() {
  const router = useRouter();
  const {
    cartItems,
    clearCart,
    decreaseQuantity,
    increaseQuantity,
    removeItem,
  } = useCart();

  const handleCheckout = async () => {
    try {
      const cartData = cartItems.map((cartItem) => ({
        productId: cartItem.item.id,
        totalPrice: cartItem.item.priceInCents * cartItem.quantity,
      }));

      // const res = await customerOrder(cartData);
      toast.promise(customerOrder(cartData), {
        loading: "Placing...",
        success: "Order place successfully",
        error: "Something went wrong",
      });
      router.push("/user-dashboard/forem-store/checkout");
    } catch (error) {
      console.error("Error sending cart data to server", error);
    }
  };

  const grandTotal = cartItems.reduce((acc, cartItem) => {
    // console.log(typeof cartItem.quantity);

    return acc + cartItem.item.priceInCents * cartItem.quantity;
  }, 0);
  // console.log(typeof grandTotal);

  return (
    <div>
      {cartItems.map((cartItem) => (
        <>
          <div
            className="flex justify-between items-center mt-8"
            key={cartItem.item.id}
          >
            <div>
              <Image
                src={`${cartItem.item.image}`}
                alt="product image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-center gap-4  md:flex-row md:items-center md:justify-around w-full">
              <div className="flex flex-col items-start gap-1 ">
                <h2 className="font-medium capitalize line-clamp-1 w-[500px]">
                  {cartItem.item.name}
                </h2>
                <span className="text-muted-foreground text-sm">
                  TK {cartItem.item.priceInCents}
                </span>
                <span className="text-muted-foreground text-sm">
                  Size: {cartItem.size}
                </span>
              </div>
              <div className="flex items-center -ml-5 gap-4">
                <div className="p-4 border-2 flex items-center gap-8">
                  <Minus
                    className="w-5 h-5 cursor-pointer transition-colors duration-100 ease-in-out font-bold hover:text-primary"
                    onClick={() => decreaseQuantity(cartItem.item.id)}
                  />
                  <span>{cartItem.quantity}</span>
                  <Plus
                    className="w-5 h-5 cursor-pointer transition-colors duration-100 ease-in-out font-bold hover:text-primary"
                    onClick={() => increaseQuantity(cartItem.item.id)}
                  />
                </div>
                <div onClick={() => removeItem(cartItem.item.id)}>
                  <Trash className="w-5 h-5 transition-colors duration-100 ease-in-out font-bold hover:text-destructive cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end items-end">
              <span>Tk</span>
              <span>{cartItem.item.priceInCents * cartItem.quantity}</span>
            </div>
          </div>
        </>
      ))}
      <Separator className="h-1 mt-6" />
      <div className="mt-8 flex xs:justify-center xs:items-center sm:items-end sm:justify-end sm:flex-row xs:flex-col gap-4">
        <p className="font-semibold text-xl">Estimate total</p>
        <span>Tk {grandTotal}</span>
      </div>
      <div className="flex mt-8 items-end justify-end">
        <Button size="lg" className=" rounded-full" onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
    </div>
  );
}
