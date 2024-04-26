import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UpdateShopProduct } from "../_components/update-product";
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

const SingleProduct = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  let { product } = await fetchProductById(id);
  // console.log(id);
  const handleDeleteProduct = async () => {
    await deleteProduct(id);
  };

  return (
    <div className="py-6 pr-4 mt-20 container mx-auto">
      <div className="flex flex-col gap-6 items-start md:flex-row md:justify-center md:items-center md:gap-16">
        <div className=" w-full">
          <Image
            src={`${product?.image}`}
            alt="product image"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <h4 className="font-rubik text-lg text-muted-foreground">
            Forem Shop
          </h4>
          <h2 className="font-inter tracking-wide text-3xl font-medium">
            {product?.name}
          </h2>
          <p className="font-inter text-muted-foreground">
            Tk {product?.priceInCents} BDT
          </p>
          <code className="font-inter text-wrap text-base text-muted-foreground">
            {product?.description}.
          </code>
        </div>
      </div>
      <div className="flex sm:flex-col items-center w-full md:flex-row md:justify-end gap-4 mt-5 md:items-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"lg"} className="mt-4 w-full md:w-auto rounded">
              Update
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0">
            <DialogHeader className="p-4">
              <DialogTitle>Update Product</DialogTitle>
            </DialogHeader>
            <div className="">
              <UpdateShopProduct product={product} />
            </div>
          </DialogContent>
        </Dialog>
        <DeleteButton
          id={product?.id as string}
          size={"lg"}
          className="mt-4 w-full md:w-auto rounded"
          text="Delete"
        />
      </div>
    </div>
  );
};
export default SingleProduct;
