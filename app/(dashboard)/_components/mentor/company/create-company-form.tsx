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
import { createCompany } from "@/lib/actions/mentor/company";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CreateCompanyForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: "",
      about: "",
      company_logo: "",
      company_url: "",
      email: "",
      location: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof companySchema>) {
    console.log(values);
    const res = await createCompany(values);
    if (res?.message) {
      toast.success("Company Registered!");
      router.push(`/mentor-dashboard/company/${res.company.name}`);
    }
    form.reset();
  }
  return (
    <div className="w-full px-4 mt-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <div className="w-[30%]">
              <FormField
                control={form.control}
                name="company_logo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload Logo</FormLabel>
                    <FormControl className="pt-3">
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
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default CreateCompanyForm;
