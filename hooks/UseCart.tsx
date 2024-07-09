import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "@/utils/types";

interface CartItem {
  item: ProductType;
  quantity: number;
  size: string;
  image?: string;
}
interface CartStore {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      cartItems: [],
      addItem: (data: CartItem) => {
        const { item, quantity, size, image } = data;
        const currentItems = get().cartItems;

        const isExist = currentItems.find(
          (cartItem) => cartItem.item.id === item.id
        );
        if (isExist) {
          return toast(`${isExist.item.name} already in Cart`, { icon: "🛒" });
        }
        set({ cartItems: [...currentItems, { item, quantity, size, image }] });
        toast.success(`${item.name} added to cart`, { icon: "🧺" });
      },
      removeItem: (id: string) => {
        const newItems = get().cartItems.filter((item) => item.item.id !== id);
        set({ cartItems: newItems });
        toast("Remove item", {
          style: {
            background: "#FF407D",
            color: "#fff",
          },
        });
      },
      increaseQuantity: (id: string) => {
        const existItems = get().cartItems.map((cartItem) =>
          cartItem.item.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );

        set({ cartItems: existItems });
      },
      decreaseQuantity: (id: string) => {
        const existItems = get().cartItems.map((cartItem) =>
          cartItem.item.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );

        set({ cartItems: existItems });
      },
      clearCart: () => {
        set({ cartItems: [] });
        toast("Clear cart item", {
          style: {
            background: "#8576FF",
            color: "#fff",
          },
        });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
