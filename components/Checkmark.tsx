"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useCheckbox } from "@/providers/CheckboxProvider";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Checkmark = ({ text }: { text: string }) => {
  const { isChecked, handleToggle } = useCheckbox();
  const [id, setId] = useState("");
  const isAnimating = useRef(false);

  useEffect(() => {
    setId(uuidv4());
  }, []);

  const handleCheckboxChange = (id) => {
    if (!isAnimating.current) {
      handleToggle(id);
    }
  };

  const handleAnimationStart = () => {
    isAnimating.current = true;
  };

  const handleAnimationEnd = () => {
    isAnimating.current = false;
  };

  return (
    <div className="">
      <Checkbox
        id={id}
        checked={isChecked(id)}
        onCheckedChange={() => handleToggle(id)}
        className="mr-1"
      />
      <label
        htmlFor={id}
        className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        <span
          style={{ textDecoration: isChecked(id) ? "line-through" : "none" }}
        >
          {text}
        </span>
      </label>
    </div>
  );
};

export default Checkmark;
