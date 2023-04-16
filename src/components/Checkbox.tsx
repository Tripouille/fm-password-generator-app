"use client";
import { PropsWithClassName } from "@/utils/types";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import clsx from "clsx";
import { ComponentProps } from "react";
import { CheckSVG } from "./svgs/CheckSVG";

export const Checkbox = ({
  className,
  ...props
}: PropsWithClassName<ComponentProps<typeof RadixCheckbox.Root>>) => {
  return (
    <RadixCheckbox.Root
      className={clsx(
        "h-5 w-5 border-2 border-cream data-[state=checked]:border-green data-[state=checked]:bg-green",
        className
      )}
      {...props}
    >
      <RadixCheckbox.Indicator className="grid h-full place-items-center">
        <CheckSVG />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};
