"use client";

import { PropsWithClassName } from "@/utils/types";
import * as RadixSlider from "@radix-ui/react-slider";
import { ComponentProps } from "react";
import { Slider } from "./Slider";

export const CharacterLengthSlider = ({
  className,
  ...props
}: PropsWithClassName<ComponentProps<typeof RadixSlider.Root>>) => {
  const length = props.value?.[0] ?? "--";

  return (
    <label className={`flex flex-col ${className ?? ""}`}>
      <p className="mb-2 flex items-center justify-between font-bold sm:mb-4">
        <span className="leading-snug sm:text-lg sm:leading-6">
          Character Length
        </span>{" "}
        <span className="text-2xl text-green sm:text-[2rem] sm:leading-[2.625rem]">
          {length}
        </span>
      </p>
      <Slider {...props} />
    </label>
  );
};
