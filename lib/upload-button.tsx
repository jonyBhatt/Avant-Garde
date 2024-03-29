"use client";
import { UploadFileButton } from "@/utils/uploadthing";
import { Loader, X } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import "@uploadthing/react/styles.css";

interface IUploadButton {
  endpoint: "imageUploader" | "pdfUploader";
  value?: string;
  onChange: (url?: string) => void;
  className?: string;
}
const UploadButton = ({
  endpoint,
  value,
  onChange,
  className,
}: IUploadButton) => {
  const fileType = value?.split(".").pop();
  return (
    <div>
      {value && fileType !== "pdf" && (
        <div className="relative">
          <Image
            src={value}
            alt="upload image"
            width={500}
            height={500}
            className="object-cover rounded-xl"
          />
          <button className="p-1 absolute top-0 right-0 shadow-sm shadow-dark-strawberry-red bg-pink-500 text-white">
            <X className="w-4 h-4 rounded-full" />
          </button>
        </div>
      )}
      <UploadFileButton
        endpoint={endpoint}
        className={className}
        onUploadBegin={() => {
          <Loader className="w-4 h-4 animate-spin" />;
        }}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
          toast.success("Upload Complete");
        }}
        onUploadError={(error: Error) => {
          toast.error(`${error.message}`);
        }}
      />
    </div>
  );
};

export default UploadButton;
