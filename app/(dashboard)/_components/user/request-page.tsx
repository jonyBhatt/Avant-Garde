"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { boolean, z } from "zod";
import { useState } from "react";
import { Info, Loader2, MoveUp } from "lucide-react";
import { motion } from "framer-motion";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
import { liveHelpSchema } from "@/utils/validation";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Steps {
  stepNumber: number;
  title: string;
}
const steps = [
  {
    stepNumber: 1,
    title: "Tell us about what you  need help with",
  },
  {
    stepNumber: 2,
    title: "How you would like to get help",
  },
];
const RequestPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);

  const next = () => {
    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  const form = useForm<z.infer<typeof liveHelpSchema>>({
    resolver: zodResolver(liveHelpSchema),
    defaultValues: {
      title: "",
      budget: "",
      description: "",

      sessionLength: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof liveHelpSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="relative">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full py-16 "
        >
          {currentStep === 0 && (
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-start gap-3"
            >
              <span className="font-rubik  text-xl ">
                {`Step ${currentStep + 1} out of ${steps.length}
                `}{" "}
              </span>
              <h2 className="font-rubik font-bold text-3xl my-6">
                {steps[currentStep].title}
              </h2>
              <h2 className="font-rubik font-bold text-lg my-4">
                {/* {steps[currentStep].title} */}
                Describe your request
              </h2>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="w-full ">
                    <FormLabel className="text-sm text-muted-foreground">
                      One sentence summary *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. I want to learn generics about typescript"
                        {...field}
                        className="w-full"
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
                  <FormItem className="w-full ">
                    <FormLabel className="text-sm text-muted-foreground">
                      Details what you need help with *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="The more details you provide, the faster you'll be able to find help"
                        {...field}
                        rows={5}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0.5, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-start gap-8"
            >
              <span className="font-rubik  text-xl ">
                {`Step ${currentStep + 1} out of ${steps.length}
                `}{" "}
              </span>
              <h2 className="font-rubik font-bold text-3xl my-6">
                {steps[currentStep].title}
              </h2>
              <FormField
                control={form.control}
                name="helpType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Notify me about...</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex items-center gap-8"
                      >
                        <FormItem className="border border-white/[.1] p-8 rounded-[8px] bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)] flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="1:1 help" />
                          </FormControl>
                          <FormLabel>
                            <div className="flex flex-col items-start">
                              <b className="font-rubik text-lg">
                                1:1 live help
                              </b>
                              <span className="text-muted-foreground text-sm">
                                Start a live mentorship session
                              </span>
                            </div>
                          </FormLabel>
                        </FormItem>

                        <FormItem className="border border-white/[.1] p-8 rounded-[8px] bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)] flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="long-term" />
                          </FormControl>
                          <FormLabel>
                            <div className="flex flex-col items-start">
                              <b className="font-rubik text-lg">
                                Long term mentorship
                              </b>
                              <span className="text-muted-foreground text-sm">
                                Work regularly with a dedicated mentor
                              </span>
                            </div>
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sessionLength"
                render={({ field }) => (
                  <FormItem className="w-full ">
                    <FormLabel className="text-lg text-secondary-foreground">
                      Estimate session length *
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select estimate session" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="less1hour">
                          Less then 1 hour
                        </SelectItem>
                        <SelectItem value="more1hour">
                          More then 1 hour
                        </SelectItem>
                        <SelectItem value="notsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem className="w-full ">
                    <FormLabel className="text-lg text-secondary-foreground">
                      Estimate budget for every 15 min *
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select estimate budget" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="20">USD $20</SelectItem>
                        <SelectItem value="30">USD $30</SelectItem>
                        <SelectItem value="40">USD $40</SelectItem>
                        <SelectItem value="50">USD $50</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex items-center gap-2.5 pt-5">
                      <Info className="w-4 h-4 text-dark-pastel-blue" />
                      <span className="text-dark-pastel-blue font-rubik">
                        Covers 50% of our mentor&apos;s fee
                      </span>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
          )}

          <div className="mt-8 py-5">
            <div className="flex justify-between">
              {currentStep > 0 && currentStep <= steps.length && (
                <motion.div
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Button
                    type="button"
                    onClick={prev}
                    disabled={currentStep === 0}
                    size="lg"
                    className="rounded-full px-8 flex items-center gap-4 bg-transparent absolute top-0 p-0 m-0 hover:bg-transparent"
                  >
                    <MoveUp className="w-6 h-6 text-dark-white" />
                    <span className="font-rubik text-lg text-secondary-foreground">
                      Previous
                    </span>
                  </Button>
                </motion.div>
              )}
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
                    Post request
                  </Button>
                </>
              ) : (
                <>
                  <motion.span
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    onClick={next}
                    // disabled={currentStep === steps.length - 1}
                    // size="lg"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "rounded-full px-8 cursor-pointer font-bold text-lg"
                    )}
                  >
                    Next
                  </motion.span>
                </>
              )}
            </div>
          </div>

          {currentStep === 0 && (
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 0.3, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-8 opacity-5"
            >
              <span className="font-rubik  text-xl ">
                {`Step 2 out of 2
              `}{" "}
              </span>
              <h2 className="font-rubik font-bold text-3xl my-6">
                How you would like to get help
              </h2>
            </motion.div>
          )}
        </form>
      </Form>
    </div>
  );
};
export default RequestPage;
