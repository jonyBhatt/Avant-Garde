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
import MarkDownPreview from "@/components/shared/markdown/mark-down-preview";
import { applyJob } from "@/lib/actions/user/apply-job-action";
import toast from "react-hot-toast";

const ApplyFormDetails = ({ id }: { id: string }) => {
  const form = useForm<z.infer<typeof applyJobSchema>>({
    resolver: zodResolver(applyJobSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof applyJobSchema>) {
    console.log(values);
    const res = await applyJob(id, values);
    if (res?.message) {
      form.reset();
      toast.success(res.message);
    }
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

          <FormField
            control={form.control}
            name="letter"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Cover letter</FormLabel>
                <FormControl>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Textarea rows={25} {...field} />
                    <FormDescription>Please follow mdx rules</FormDescription>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-rubik tracking-wide border-b">
                        Preview
                      </h3>

                      <MarkDownPreview content={form.getValues().letter} />
                    </div>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ApplyFormDetails;
