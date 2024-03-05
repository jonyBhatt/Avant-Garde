const JobMainContent = () => {
  return (
    <div className="flex flex-col items-start gap-6 pr-2">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-lg">
          Showing <b>100</b> Jobs Available
        </h3>
        <span>Sort By</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"></div>
    </div>
  );
};
export default JobMainContent;
