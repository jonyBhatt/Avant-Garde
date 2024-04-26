"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CiCircleAlert } from "react-icons/ci";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import UploadButton from "@/lib/upload-button";

import { ForemData } from "@/utils/data/forem-data";
import { addProductShopSchema, productShopSchema } from "@/utils/validation";
import { Category, Product } from "@prisma/client";
import { updateProduct } from "@/lib/actions/mentor/shop/crud-product";
import toast from "react-hot-toast";

export const UpdateShopProduct = ({
  product,
}: {
  product: Product | undefined | null;
}) => {
  const form = useForm<z.infer<typeof addProductShopSchema>>({
    resolver: zodResolver(addProductShopSchema),
    defaultValues: {
      title: product?.name || "",
      category: product?.category,
      description: product?.description || "",
      photo: product?.image || "",
      price: String(product?.priceInCents) || "",
      size: product?.size,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof addProductShopSchema>) {
    // console.log(values);
    try {
      const res = await updateProduct(values, product?.id as string);
      if (res.success) {
        toast.success("Update product");
      }
    } catch (error) {
      toast.error("Can not update product");
    }
  }
  return (
    <ScrollArea className="h-[500px]  ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 px-7 pb-4"
        >
          <div className="grid grid-cols-1 gap-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="product title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={15}
                      placeholder="shadcn"
                      {...field}
                      className="bg-transparent border-2 border-muted-foreground rounded-[8px]
                        ring-offset-0 focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="&#x9F3;1000"
                      {...field}
                      className="bg-transparent border-2 border-muted-foreground rounded-[8px]
                        ring-offset-0 focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Size</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex lg:flex-row xs:flex-col space-y-1 gap-4"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="S" />
                        </FormControl>
                        <FormLabel className="font-normal">Small</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="M" />
                        </FormControl>
                        <FormLabel className="font-normal">Medium</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="L" />
                        </FormControl>
                        <FormLabel className="font-normal">Large</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="XL" />
                        </FormControl>
                        <FormLabel className="font-normal">XL</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="XXL" />
                        </FormControl>
                        <FormLabel className="font-normal">2XL</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="XXXL" />
                        </FormControl>
                        <FormLabel className="font-normal">3XL</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/** Category */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        className="bg-transparent border-2 border-primary rounded-[8px]
                        ring-offset-0 focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0"
                      >
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={Category.T_SHIRT}>T-Shirt</SelectItem>
                      <SelectItem value={Category.PANTS}>PANTS</SelectItem>
                      <SelectItem value={Category.SHOES}>SHOES</SelectItem>
                      <SelectItem value={Category.ACCESSORIES}>
                        ACCESSORIES
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="photo"
              render={({ field }) => (
                <FormItem className="mt-8">
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <UploadButton
                      endpoint="imageUploader"
                      onChange={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormDescription className="flex items-center gap-1">
                    <CiCircleAlert className="w-4 h-4 text-muted-foreground" />
                    <span>
                      Pay attention to the quality of the pictures you add
                    </span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" size={"lg"} className="w-full rounded">
            Update
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
};
