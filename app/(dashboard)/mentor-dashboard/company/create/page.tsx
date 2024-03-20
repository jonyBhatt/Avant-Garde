import CreateCompanyForm from "@/app/(dashboard)/_components/mentor/company/create-company-form";

const CreateCompany = () => {
  return (
    <div className="py-6">
      <h2 className="text-xl font-rubik border-b border-b-pink-300 pb-2 tracking-wider font-semibold rounded-b-[4px]">
        Register your company
      </h2>
      <CreateCompanyForm />
    </div>
  );
};
export default CreateCompany;
