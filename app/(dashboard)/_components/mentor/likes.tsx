"use client";
import { useState } from "react";
import { BsHeartFill } from "react-icons/bs";

const Likes = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div
      className="flex items-center gap-1 cursor-pointer"
      onClick={() => setIsActive(!isActive)}
    >
      <BsHeartFill
        className={`w-4 h-4 ${isActive ? "text-pink-600" : "text-primary"}`}
      />
      <span className="text-xs text-muted-foreground">
        {isActive ? "Liked" : "Like"}
      </span>
    </div>
  );
};
export default Likes;
