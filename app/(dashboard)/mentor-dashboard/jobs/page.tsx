import JobMainContent from "../../_components/mentor/job/job-main_content";
import JobSideBar from "../../_components/mentor/job/job-side_bar";

const Jobs = () => {
  return (
    <div className="py-8 ">
      <div className="grid md:grid-cols-[240px_1fr] items-start gap-4">
        {/** Side Bar */}
        <div className=" ">
          <JobSideBar />
        </div>
        {/** Main Content */}
        <div className="  ">
          <JobMainContent />
        </div>
      </div>
    </div>
  );
};
export default Jobs;

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PRCxHwyifUY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import Link from "next/link"
// import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Label } from "@/components/ui/label"
// import { CardContent, CardFooter, Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"

// export default function Component() {
//   return (
//     <section className="grid md:grid-cols-[240px_1fr] items-start">
//       <div className="flex flex-col gap-4 items-start py-2">
//         <div className="grid gap-1">
//           <Link className="font-semibold" href="#">
//             All Jobs
//           </Link>
//           <Link className="font-semibold" href="#">
//             Engineering
//           </Link>
//           <Link className="font-semibold" href="#">
//             Design
//           </Link>
//           <Link className="font-semibold" href="#">
//             Product
//           </Link>
//           <Link className="font-semibold" href="#">
//             Marketing
//           </Link>
//           <Link className="font-semibold" href="#">
//             Sales
//           </Link>
//           <Link className="font-semibold" href="#">
//             Customer Support
//           </Link>
//           <Link className="font-semibold" href="#">
//             Finance
//           </Link>
//           <Link className="font-semibold" href="#">
//             Legal
//           </Link>
//           <Link className="font-semibold" href="#">
//             HR & Recruiting
//           </Link>
//           <Link className="font-semibold" href="#">
//             Operations
//           </Link>
//           <Link className="font-semibold" href="#">
//             Data Science
//           </Link>
//         </div>
//         <Accordion className="w-full" collapsible type="single">
//           <AccordionItem value="location">
//             <AccordionTrigger className="text-base">Location</AccordionTrigger>
//             <AccordionContent>
//               <div className="grid gap-2">
//                 <Label className="flex items-center gap-2 font-normal">
//                   <Checkbox id="location-san-francisco" />
//                   San Francisco, CA{"\n                              "}
//                 </Label>
//                 <Label className="flex items-center gap-2 font-normal">
//                   <Checkbox id="location-new-york" />
//                   New York, NY{"\n                              "}
//                 </Label>
//                 <Label className="flex items-center gap-2 font-normal">
//                   <Checkbox id="location-remote" />
//                   Remote{"\n                              "}
//                 </Label>
//               </div>
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="type">
//             <AccordionTrigger className="text-base">Type</AccordionTrigger>
//             <AccordionContent>
//               <div className="grid gap-2">
//                 <Label className="flex items-center gap-2 font-normal">
//                   <Checkbox id="type-full-time" />
//                   Full Time{"\n                              "}
//                 </Label>
//                 <Label className="flex items-center gap-2 font-normal">
//                   <Checkbox id="type-part-time" />
//                   Part Time{"\n                              "}
//                 </Label>
//                 <Label className="flex items-center gap-2 font-normal">
//                   <Checkbox id="type-contract" />
//                   Contract{"\n                              "}
//                 </Label>
//               </div>
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="experience">
//             <AccordionTrigger className="text-base">
//               Experience Level
//             </AccordionTrigger>
//             <AccordionContent>
//               <div className="grid gap-2">
//                 <Label className="flex items-center gap-2 font-normal">
//                   <Checkbox id="experience-internship" />
//                   Internship{"\n                              "}
//                 </Label>
//                 <Label className="flex items-center gap-2 font-normal">
//                   <Checkbox id="experience-entry" />
//                   Entry Level{"\n                              "}
//                 </Label>
//                 <Label className="flex items-center gap-2 font-normal">
//                   <Checkbox id="experience-mid" />
//                   Mid Level{"\n                              "}
//                 </Label>
//                 <Label className="flex items-center gap-2 font-normal">
//                   <Checkbox id="experience-senior" />
//                   Senior Level{"\n                              "}
//                 </Label>
//               </div>
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>
//       </div>
//       <div className="grid gap-6 md:gap-8">
//         <div className="grid gap-2">
//           <h1 className="text-2xl font-semibold tracking-tight">
//             Open Positions
//           </h1>
//           <p className="text-sm text-gray-500 leading-none dark:text-gray-400">
//             Showing 1-10 of 100
//           </p>
//         </div>
//         <div className="grid gap-6">
//           <Card className="p-0">
//             <CardContent className="p-4 md:p-6">
//               <div className="grid gap-2">
//                 <div className="flex items-center gap-4">
//                   <img
//                     alt="Company"
//                     className="rounded-lg"
//                     height={40}
//                     src="/placeholder.svg"
//                     style={{
//                       aspectRatio: "40/40",
//                       objectFit: "cover",
//                     }}
//                     width={40}
//                   />
//                   <div className="grid gap-1">
//                     <h3 className="font-semibold">Product Manager</h3>
//                     <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
//                       Acme Inc. · San Francisco, CA
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <div className="grid gap-1">
//                     <h4 className="font-semibold">Description</h4>
//                     <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
//                       We are looking for an experienced Product Manager to join
//                       our team. The ideal candidate will have a strong
//                       background in managing the end-to-end product lifecycle,
//                       from ideation to launch.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//             <CardFooter className="p-4 md:p-6 flex items-center">
//               <div className="grid gap-1">
//                 <h4 className="font-semibold">Apply for this position</h4>
//                 <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
//                   To apply, please send your resume to
//                   <Link className="underline underline-offset-2" href="#">
//                     careers@acme.com
//                   </Link>
//                 </p>
//               </div>
//               <Button className="ml-auto shrink-0" variant="outline">
//                 View Details
//               </Button>
//             </CardFooter>
//           </Card>
//           <Card className="p-0">
//             <CardContent className="p-4 md:p-6">
//               <div className="grid gap-2">
//                 <div className="flex items-center gap-4">
//                   <img
//                     alt="Company"
//                     className="rounded-lg"
//                     height={40}
//                     src="/placeholder.svg"
//                     style={{
//                       aspectRatio: "40/40",
//                       objectFit: "cover",
//                     }}
//                     width={40}
//                   />
//                   <div className="grid gap-1">
//                     <h3 className="font-semibold">Senior Software Engineer</h3>
//                     <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
//                       Beta Co. · New York, NY
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <div className="grid gap-1">
//                     <h4 className="font-semibold">Description</h4>
//                     <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
//                       We are looking for an experienced Senior Software Engineer
//                       to join our team. The ideal candidate will have a strong
//                       background in managing the end-to-end product lifecycle,
//                       from ideation to launch.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//             <CardFooter className="p-4 md:p-6 flex items-center">
//               <div className="grid gap-1">
//                 <h4 className="font-semibold">Apply for this position</h4>
//                 <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
//                   To apply, please send your resume to
//                   <Link className="underline underline-offset-2" href="#">
//                     careers@beta.com
//                   </Link>
//                 </p>
//               </div>
//               <Button className="ml-auto shrink-0" variant="outline">
//                 View Details
//               </Button>
//             </CardFooter>
//           </Card>
//           <Card className="p-0">
//             <CardContent className="p-4 md:p-6">
//               <div className="grid gap-2">
//                 <div className="flex items-center gap-4">
//                   <img
//                     alt="Company"
//                     className="rounded-lg"
//                     height={40}
//                     src="/placeholder.svg"
//                     style={{
//                       aspectRatio: "40/40",
//                       objectFit: "cover",
//                     }}
//                     width={40}
//                   />
//                   <div className="grid gap-1">
//                     <h3 className="font-semibold">UX Designer</h3>
//                     <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
//                       Design Co. · Remote
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <div className="grid gap-1">
//                     <h4 className="font-semibold">Description</h4>
//                     <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
//                       We are looking for an experienced UX Designer to join our
//                       team. The ideal candidate will have a strong background in
//                       managing the end-to-end product lifecycle, from ideation
//                       to launch.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//             <CardFooter className="p-4 md:p-6 flex items-center">
//               <div className="grid gap-1">
//                 <h4 className="font-semibold">Apply for this position</h4>
//                 <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
//                   To apply, please send your resume to
//                   <Link className="underline underline-offset-2" href="#">
//                     careers@designco.com
//                   </Link>
//                 </p>
//               </div>
//               <Button className="ml-auto shrink-0" variant="outline">
//                 View Details
//               </Button>
//             </CardFooter>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }
