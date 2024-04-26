"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CiCircleAlert } from "react-icons/ci";

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
import { addProductShopSchema } from "@/utils/validation";
import { Category } from "@prisma/client";
import { Checkbox } from "@/components/ui/checkbox";
import { addProduct } from "@/lib/actions/mentor/shop/crud-product";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const AddForemForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof addProductShopSchema>>({
    resolver: zodResolver(addProductShopSchema),
    defaultValues: {
      title: "",
      description: "",
      photo: "",
      price: "",
      isFeatured: false,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof addProductShopSchema>) {
    try {
      const product = await addProduct(values);
      if (product?.success) {
        toast.success("Product Added");
        router.push("/mentor-dashboard/forem-store");
      }
    } catch (error) {
      toast.error("Cannot add product!");

      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="p-4 rounded-[8px] bg-accent flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-4 w-full">
              <h3 className="font-inter text-lg font-semibold">
                General Information
              </h3>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="shadcn"
                        {...field}
                        className="bg-transparent border-2 border-primary rounded-[8px]
                        ring-offset-0 focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0"
                      />
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
                        className="bg-transparent border-2 border-primary rounded-[8px]
                        ring-offset-0 focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                        className="bg-transparent border-2 border-primary rounded-[8px]
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
            </div>
          </div>
          <div className="p-4 rounded-[8px] bg-accent flex flex-col gap-4 w-full">
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
              name="isFeatured"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border py-6 ">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="rounded-full"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none ">
                    <FormLabel className="cursor-pointer">
                      Featured Product
                    </FormLabel>
                  </div>
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
        </div>

        <div className="flex justify-center items-center w-full">
          <Button type="submit" size={"lg"} className="rounded-[8px]">
            Publish
          </Button>
        </div>
      </form>
    </Form>
  );
};

{
  /**
      <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>
            This is your public display name.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  
*/
}
