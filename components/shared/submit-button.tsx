import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const SubmitButton = ({
  isSubmitting,
  className,
  loadingText,
  text,
}: {
  isSubmitting?: boolean;
  className?: string;
  loadingText?: string;
  text: string;
}) => {
  return (
    <Button
      type="submit"
      size={"lg"}
      className={cn(className, "rounded-full text-white")}
    >
      {isSubmitting && (
        <>
          <span className=" flex items-center gap-1.5">
            <Loader2 className="w-4 h-4 duration-150 animate-spin" />
            {loadingText}
          </span>
        </>
      )}
      <span>{isSubmitting ? loadingText : text}</span>
    </Button>
  );
};
export default SubmitButton;
