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
import { sendEmailSchema } from "@/utils/validation";
import { Loader2 } from "lucide-react";

const SendEmailForm = () => {
  const form = useForm<z.infer<typeof sendEmailSchema>>({
    resolver: zodResolver(sendEmailSchema),
    defaultValues: {
      email: "",
      message: "",
      subject: "",
    },
  });
  async function onSubmit(values: z.infer<typeof sendEmailSchema>) {
    console.log(values);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };

    fetch("/api/send", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        form.reset();

        console.log("Response from server:", data);
      })
      .catch((error) => {
        // Handle errors
        console.error("There was a problem with the fetch operation:", error);
      });
  }
  const {
    formState: { isSubmitting },
  } = form;

  return (
    <div className="py-4">
      <h2 className="text-sm font-rubik ">New Message</h2>
      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormControl>
                  <Input
                    className="rounded-xl focus-visible:ring-0 focus-visible:ring-inset focus-visible:ring-offset-0 border-0 border-b"
                    placeholder="To"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="">
                <FormControl>
                  <Input
                    className="rounded-xl focus-visible:ring-0 focus-visible:ring-inset focus-visible:ring-offset-0 border-0 border-b"
                    placeholder="Subject"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="">
                <FormControl>
                  <Textarea
                    className="rounded-xl focus-visible:ring-0 focus-visible:ring-inset focus-visible:ring-offset-0 "
                    {...field}
                    rows={15}
                    placeholder="Message"
                  />
                </FormControl>
                <FormDescription>
                  If you want use bold, italic, link etc please follow mdx
                  rules!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" size={"lg"} className="rounded-full text-white">
            {isSubmitting ? (
              <>
                <div className=" flex items-center gap-1.5">
                  <Loader2 className="w-4 h-4 duration-150 animate-spin" />
                  Sending..
                </div>
              </>
            ) : (
              <>
                <span>Send</span>
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default SendEmailForm;
