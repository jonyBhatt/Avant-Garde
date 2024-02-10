interface Steps {
  steps: {
    id: string;
    name: string;
    stepNumber: number;
  };
  index: number;
  currentStep: number;
}

const LeftSideBarUserOnboard = ({ steps, index, currentStep }: Steps) => {
  return (
    <div className="flex flex-col gap-10 items-start">
      <div className="flex items-center gap-4 font-inter">
        {currentStep === index ? (
          <div className="border border-dark-light-gray bg-primary w-7 h-7 text-center flex items-center justify-center rounded-full">
            <span className="text-white">{steps.stepNumber}</span>
          </div>
        ) : (
          <div className="border border-dark-light-gray w-7 h-7 text-center flex items-center justify-center rounded-full">
            <span>{steps.stepNumber}</span>
          </div>
        )}

        <div className="flex flex-col items-start">
          <span className="text-gray-400">{steps.id}</span>
          <h3 className="font-bold tracking-wider">{steps.name}</h3>
        </div>
      </div>
    </div>
  );
};
export default LeftSideBarUserOnboard;
