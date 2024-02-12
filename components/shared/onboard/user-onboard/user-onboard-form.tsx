"use client";

import { userOnboardSchema } from "@/utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, buttonVariants } from "@/components/ui/button";
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
import { Step } from "@/utils/types";
import { studentOnboardAction } from "@/lib/actions/onboard";
import { cn } from "@/lib/utils";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";

interface UserOnboardProps {
  currentStep: number;
  previousStep: number;
  steps: Step[];
  prev: () => void;
  next: () => void;
}

const UserOnboardForm = ({
  currentStep,
  previousStep,
  steps,
  prev,
  next,
}: UserOnboardProps) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof userOnboardSchema>>({
    resolver: zodResolver(userOnboardSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      c_technical: "",
      career: "",
      institution: "",
      major: "",
      s_technical: "",
      s_time: "",
      time: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof userOnboardSchema>) {
    console.log(values);
    const res = await studentOnboardAction(values);
    if (res.message) {
      toast.success("Onboard success!");
      router.push("/");
    }
    if (res.error) {
      toast.error(`${res.error}`);
    }
  }
  return (
    <div className="py-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/** Step 0 */}
          {currentStep === 0 && (
            <div>
              <h2 className="text-base font-semibold leading-7 text-primary-foreground">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                Provide your personal details.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="johndoe@gmail.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          )}

          {/** Step 1 */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-base font-semibold leading-7 text-primary-foreground">
                Academic Background
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                Provide your academic profile.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="institution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Institution</FormLabel>
                        <FormControl>
                          <Input placeholder="your institution..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="major"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your major subject</FormLabel>
                        <FormControl>
                          <Input placeholder="major subject" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          )}

          {/** Step 2 */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-base font-semibold leading-7 text-primary-foreground">
                Career Goal
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                What you want to do in long term.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-12">
                  <FormField
                    control={form.control}
                    name="career"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your career goal</FormLabel>
                        <FormControl>
                          {/* <Input placeholder="your institution..." {...field} /> */}
                          <Textarea
                            placeholder="tell us about what you want to do your career..."
                            {...field}
                            rows={15}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          )}

          {/** Step 3 */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-base font-semibold leading-7 text-primary-foreground">
                Time commitment
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                Understanding your time availability: Tailoring Mentorship to
                Your Schedule
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time commit</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="how many hours you can commit in a day"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="s_time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your time</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your specific time in your GST"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          )}

          {/** Step 4 */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-base font-semibold leading-7 text-primary-foreground">
                Technical Skills
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                Assessing user proficiency: Unveiling Technical Skills and
                Competencies
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-12">
                  <FormField
                    control={form.control}
                    name="c_technical"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Technical Skills</FormLabel>
                        <FormControl>
                          <Input placeholder="your skills" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="sm:col-span-12">
                  <FormField
                    control={form.control}
                    name="s_technical"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your specific technical skills</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your want to learn or explore in these skills..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          )}

          {/** Step 5 */}

          {currentStep === 5 && (
            <div className="flex flex-col items-center justify-center py-10 gap-14">
              <Image
                src="/svg/icon-thank-you.svg"
                alt="Thank You"
                width={100}
                height={100}
              />
              <h2 className="text-4xl font-semibold leading-7 text-primary-foreground font-rubik">
                Thank you for respond
              </h2>

              {/** ToDO! */}
            </div>
          )}

          <div className="mt-8 py-5">
            <div className="flex justify-between">
              <Button
                type="button"
                onClick={prev}
                disabled={currentStep === 0}
                size="lg"
                className="rounded-full px-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </Button>
              {currentStep === steps.length - 1 ? (
                <>
                  <Button
                    size="lg"
                    className="rounded-full px-8 flex items-center gap-1.5"
                    type="submit"
                  >
                    {isSubmitting && (
                      <div>
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </div>
                    )}
                    Submit
                  </Button>
                </>
              ) : (
                <>
                  <span
                    onClick={next}
                    // disabled={currentStep === steps.length - 1}
                    // size="lg"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "rounded-full px-8 cursor-pointer"
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </>
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default UserOnboardForm;
