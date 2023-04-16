"use client";
import { PropsWithClassName } from "@/utils/types";
import * as RadixSlider from "@radix-ui/react-slider";
import clsx from "clsx";
import { ComponentProps } from "react";

export const Slider = ({
  className,
  id,
  ...props
}: PropsWithClassName<ComponentProps<typeof RadixSlider.Root>>) => {
  return (
    <RadixSlider.Root
      className={clsx("relative flex h-7 w-full items-center", className)}
      {...props}
    >
      <RadixSlider.Track className="relative h-2 w-full flex-grow bg-gray-darkest">
        <RadixSlider.Range className="absolute h-full bg-green" />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="block h-7 w-7 rounded-full bg-cream"
        id={id}
        aria-label={props["aria-label"]}
      />
    </RadixSlider.Root>
  );
};
