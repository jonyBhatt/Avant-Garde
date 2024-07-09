"use server";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs";
import { use } from "react";
import { getChatUser } from "../chat/get-chat-current-user";
import { handleError } from "@/lib/utils";
interface OrderProps {
  productId: string;
  totalPrice: number;
}

export const customerOrder = async (orders: OrderProps[]) => {
  const { currentUserPrisma } = await getChatUser();
  const user = await currentUser();
  if (!currentUserPrisma) {
    throw new Error("You must be logged in to place an order");
  }

  try {
    orders.map(async (order) => {
      await prisma.order.createMany({
        data: {
          productId: order.productId,
          pricePaidInCents: order.totalPrice,
          studnetId: currentUserPrisma.id,
        },
      });
    });

    return {
      success: true,
      message: "Order placed successfully",
    };
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
