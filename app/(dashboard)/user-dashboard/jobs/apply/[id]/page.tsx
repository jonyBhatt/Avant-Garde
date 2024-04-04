import ApplyFormDetails from "@/app/(dashboard)/_components/user/job/apply-from";

const ApplyForm = ({params}:{params:{id:string}}) => {
  return (
    <div className="py-6 container mx-auto">
      <h2 className="font-inter font-semibold text-2xl">Apply Form</h2>
      <ApplyFormDetails  id={params.id}/>
    </div>
  );
};
export default ApplyForm;
