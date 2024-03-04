import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const JobExperiment = () => {
  return (
    <div className="px-2">
      <div className="grid gap-2">
        <Label className="flex items-center gap-2 font-normal">
          <Checkbox id="experience-internship" />
          Internship{"\n                              "}
        </Label>
        <Label className="flex items-center gap-2 font-normal">
          <Checkbox id="experience-entry" />
          Entry Level{"\n                              "}
        </Label>
        <Label className="flex items-center gap-2 font-normal">
          <Checkbox id="experience-mid" />
          Mid Level{"\n                              "}
        </Label>
        <Label className="flex items-center gap-2 font-normal">
          <Checkbox id="experience-senior" />
          Senior Level{"\n                              "}
        </Label>
      </div>
    </div>
  );
};
export default JobExperiment;
