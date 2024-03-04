import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const JobTypes = () => {
  return (
    <div className="px-2">
      <div className="grid gap-3">
        <Label className="flex items-center gap-2 font-normal">
          <Checkbox id="type-full-time" />
          Full Time{"\n                              "}
        </Label>
        <Label className="flex items-center gap-2 font-normal">
          <Checkbox id="type-part-time" />
          Part Time{"\n                              "}
        </Label>
        <Label className="flex items-center gap-2 font-normal">
          <Checkbox id="type-contract" />
          Contract{"\n                              "}
        </Label>
        <Label className="flex items-center gap-2 font-normal">
          <Checkbox id="location-remote" />
          Remote{"\n                              "}
        </Label>
      </div>
    </div>
  );
};
export default JobTypes;
