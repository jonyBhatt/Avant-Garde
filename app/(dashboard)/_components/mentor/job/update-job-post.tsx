"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { number, z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { jobSchema } from "@/utils/validation";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import LoadingSkeleton from "@/components/shared/LoadingSkeleton";
import { getJobPostById, updateJobPost } from "@/lib/actions/mentor/job-action";
import { JobSchema } from "@/utils/types";
import toast from "react-hot-toast";

const UpdateJobPost = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ["agetjobbyid"],
    queryFn: async () => await getJobPostById(id),
  });

  const mutation = useMutation({
    mutationFn: async (values: JobSchema) => await updateJobPost(values, id),
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Update Successfully");
      queryClient.invalidateQueries({ queryKey: ["agetjobbyid"] });
    },
  });

  const form = useForm<z.infer<typeof jobSchema>>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      description: data?.job?.description || "",
      experience: data?.job?.experience || "",
      location: data?.job?.location || "",
      title: data?.job?.title || "",
      type: data?.job?.type || "FULL_TIME",
      vacancies: String(data?.job?.vacancies) || "1",
      position: data?.job?.position || "",
      salary: data?.job?.salary || "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof jobSchema>) {
    console.log(values);
    mutation.mutate(values);
    form.reset({
      description: "",
      experience: "",
      location: "",
      position: "",
      title: "",
      type: "FULL_TIME",
      vacancies: "1",
    });
  }
  if (isLoading) return <LoadingSkeleton />;
  if (error) return "Error: " + error;
  if (!data?.job) return "Job Not Found";
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="UI/UX Designer"
                      {...field}
                      className="rounded-[8px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/** Position */}
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="rounded-[8px]">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="pb-2 mb-6">
                      <SelectItem value="Intern">Intern</SelectItem>
                      <SelectItem value="Senior Software Engineer">
                        Senior Software Engineer
                      </SelectItem>
                      <SelectItem value="Junior Software Engineer">
                        Junior Software Engineer
                      </SelectItem>
                      <SelectItem value="Senior Dev">
                        Senior Developer
                      </SelectItem>
                      <SelectItem value="Junior Dev">
                        Junior Developer
                      </SelectItem>
                      <SelectItem value="systems analyst">
                        Systems Analyst
                      </SelectItem>
                      <SelectItem value="Data Scientist">
                        Data Scientist
                      </SelectItem>
                      <SelectItem value="Network Engineer">
                        Network Engineer
                      </SelectItem>
                      <SelectItem value="IT Project Manager">
                        IT Project Manager
                      </SelectItem>
                      <SelectItem value="Cybersecurity Analyst">
                        Cybersecurity Analyst
                      </SelectItem>
                      <SelectItem value="UX/UI Designer">
                        UX/UI Designer
                      </SelectItem>
                      <SelectItem value="DevOps Engineer">
                        DevOps Engineer
                      </SelectItem>
                      <SelectItem value="Cloud Solutions Architect">
                        Cloud Solutions Architect
                      </SelectItem>
                      <SelectItem value="Machine Learning Engineer">
                        Machine Learning Engineer
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="rounded-[8px]">
                      <SelectTrigger className="text-sm px-2">
                        <SelectValue placeholder="Select experience of candidate" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="pb-2 mb-6">
                      <SelectItem value="1-2 years">1-2 Years</SelectItem>
                      <SelectItem value="3-4 years">3-4 Years</SelectItem>
                      <SelectItem value="5-6 years">5-6 Years</SelectItem>
                      <SelectItem value="upto 6 years">Upto 6 years</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Sylhet"
                      {...field}
                      className="rounded-[8px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="rounded-[8px]">
                      <SelectTrigger className="text-sm px-2">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="pb-2 mb-6">
                      <SelectItem value="FULL_TIME" className="capitalize">
                        Full Time
                      </SelectItem>
                      <SelectItem value="PART_TIME">Part Time</SelectItem>
                      <SelectItem value="REMOTE">Remote</SelectItem>
                      <SelectItem value="CONTRACT">Contract</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="vacancies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vacancies</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="1"
                      {...field}
                      className="rounded-[8px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Salary</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="80k - 100k per year"
                      {...field}
                      className="rounded-[8px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="col-span-2">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={10}
                        placeholder="job description"
                        {...field}
                        className="rounded-[8px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="rounded-[8px] text-secondary-foreground font-rubik flex items-center gap-2"
            size={"lg"}
          >
            {mutation.isPending ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Posting</span>
              </div>
            ) : (
              <>Post</>
            )}
          </Button>
          {/* <Button>Update</Button> */}
        </form>
      </Form>
    </div>
  );
};

export default UpdateJobPost;
