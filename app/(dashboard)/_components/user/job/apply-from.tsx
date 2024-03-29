"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { applyJobSchema } from "@/utils/validation";
import UploadButton from "@/lib/upload-button";

const ApplyFormDetails = () => {
  const form = useForm<z.infer<typeof applyJobSchema>>({
    resolver: zodResolver(applyJobSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof applyJobSchema>) {
    console.log(values);
  }
  return (
    <div className="my-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="cv"
            render={({ field }) => (
              <FormItem className="w-[30%]">
                <FormLabel>Upload Cv</FormLabel>
                <FormControl>
                  <UploadButton
                    endpoint="pdfUploader"
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="cv"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Cover letter</FormLabel>
                  <FormControl>
                    <Textarea rows={25} {...field} />
                  </FormControl>
                  <FormDescription>Please follow mdx rules</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cv"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Preview Cover letter</FormLabel>
                  <FormControl>
                    <Textarea rows={25} {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ApplyFormDetails;
