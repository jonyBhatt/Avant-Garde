"use server";
import prisma from "@/lib/prisma";
import { handleError } from "@/lib/utils";
import { productShopSchema } from "@/utils/validation";
import { auth } from "@clerk/nextjs";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { getChatUser } from "../../chat/get-chat-current-user";

export async function addProduct(value: productShopSchema) {
  const { currentUserPrisma } = await getChatUser();

  try {
    await prisma.product.create({
      data: {
        name: value.title,
        description: value.description,
        category: value.category,
        image: value.photo as string,
        priceInCents: Number(value.price),
        isFeatured: value.isFeatured,
        productOwnerId: currentUserPrisma.id,
      },
    });
    revalidatePath("/mentor-dashboard/forem-store");
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: handleError(error),
    };
  }
}

export async function fetchProductByOwner() {
  const { currentUserPrisma } = await getChatUser();

  try {
    const product = await prisma.product.findMany({
      where: {
        productOwnerId: currentUserPrisma.id,
      },
    });
    return {
      success: true,
      product,
    };
  } catch (error) {
    return {
      success: false,
      error: handleError(error),
    };
  }
}

export async function fetchProductById(id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    return {
      success: true,
      product,
    };
  } catch (error) {
    return {
      success: false,
      error: handleError(error),
    };
  }
}

export async function updateProduct(values: productShopSchema, id: string) {
  try {
    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        name: values.title,
        description: values.description,
        category: values.category,
        image: values.photo as string,
        priceInCents: Number(values.price),
        isFeatured: values.isFeatured,
      },
    });
    revalidatePath("/mentor-dashboard/forem-store");
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: handleError(error),
    };
  }
}

export async function deleteProduct(id: string) {
  try {
    await prisma.product.delete({
      where: {
        id,
      },
    });
    revalidatePath("/mentor-dashboard/forem-store");
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: handleError(error),
    };
  }
}
