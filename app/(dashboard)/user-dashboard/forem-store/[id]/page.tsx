import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  deleteProduct,
  fetchProductById,
} from "@/lib/actions/mentor/shop/crud-product";
import toast from "react-hot-toast";
import DeleteButton from "@/components/shared/delete-button";
import { ShoppingBag } from "lucide-react";
import AddToCartButton from "../_components/add-cart-button";
import SingleProductComponent from "../_components/single-product";

const SingleProduct = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  let { product } = await fetchProductById(id);
  // console.log(id);
  const handleDeleteProduct = async () => {
    await deleteProduct(id);
  };

  return (
    <div>
      <SingleProductComponent product={product} />
    </div>
  );
};
export default SingleProduct;
