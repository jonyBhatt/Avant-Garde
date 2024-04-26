"use client";
import { deleteProduct } from "@/lib/actions/mentor/shop/crud-product";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  className?: string;
  size?: "lg" | "sm";
  text?: string;
  id: string;
}

const DeleteButton = ({ id, className, size, text }: DeleteButtonProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    toast.promise(deleteProduct(id), {
      loading: "Deleting...",
      success: "Product delete successfully",
      error: "Product cannot be deleted!",
    });
    router.push("/mentor-dashboard/forem-store");
  };
  return (
    <Button
      variant={"destructive"}
      className={cn(className)}
      size={size}
      onClick={handleDelete}
    >
      {text}
    </Button>
  );
};
export default DeleteButton;
