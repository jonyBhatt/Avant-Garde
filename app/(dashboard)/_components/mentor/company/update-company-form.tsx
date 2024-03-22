"use client";

import { companySchema } from "@/utils/validation";
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
import UploadButton from "@/lib/upload-button";

import {
  fetchCompanyByCreator,
  updateCompany,
} from "@/lib/actions/mentor/company";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import SubmitButton from "@/components/shared/submit-button";

interface ICompany {
  name: string;
  about: string;
  company_logo: string;
  company_url: string;
  email: string;
  location: string;
}

const UpdateCompany = ({
  name,
  about,
  company_logo,
  company_url,
  email,
  location,
}: ICompany) => {
  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: name || "",
      about: about || "",
      company_logo: company_logo || "",
      company_url: company_url || "",
      email: email || "",
      location: location || "",
    },
  });

  async function onSubmit(values: z.infer<typeof companySchema>) {
    console.log(values);
    //@ts-ignore
    const res = await updateCompany(name, values);
    // if (res.updateCompany) {
    //   toast.success("Updated!");
    //   form.reset();
    // }
  }

  const {
    formState: { isSubmitting },
  } = form;

  return (
    <div className="flex flex-col gap-4 py-8 max-w-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-xl"
                      placeholder="company name.."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="rounded-xl"
                      placeholder="company email.."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="">
              <FormField
                control={form.control}
                name="company_logo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload Logo</FormLabel>
                    <FormControl className="pt-3 ">
                      <UploadButton
                        endpoint="imageUploader"
                        onChange={field.onChange}
                        value={field.value}
                        className="mt-1.5"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="company_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company website Url</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      className="rounded-xl"
                      placeholder="company website url.."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Location</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="rounded-xl"
                      placeholder="company location.."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="col-span-2">
              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>About Company</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={10}
                        placeholder="about company"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit" size={"lg"} className="rounded-full text-white">
            {isSubmitting ? (
              <>
                <span className=" flex items-center gap-1.5">
                  <Loader2 className="w-4 h-4 duration-150 animate-spin" />
                  Saving..
                </span>
              </>
            ) : (
              <>Save Changes</>
            )}
          </Button>
          {/* <SubmitButton
            text="Save Changes"
            isSubmitting
            loadingText="Saving..."
          /> */}
        </form>
      </Form>
    </div>
  );
};
export default UpdateCompany;
