"use client";
import { PropsWithClassName } from "@/utils/types";
import { useEffect, useRef, useState } from "react";
import { CopyToClipboardSVG } from "./CopyToClipboardSVG";

export interface CopyToClipboardButtonProps {
  text: string;
}

export const CopyToClipboardButton = ({
  className,
  text,
}: PropsWithClassName<CopyToClipboardButtonProps>) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  function handleClick() {
    setCopied(true);
    navigator.clipboard.writeText(text);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  }

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <button
      disabled={!text}
      className={`flex items-center gap-4 ${className ?? ""}`}
      onClick={handleClick}
    >
      <span
        className={`${
          copied ? "" : "hidden"
        } text-lg font-bold leading-snug text-green`}
      >
        COPIED
      </span>
      <CopyToClipboardSVG className="h-5 w-5 sm:h-6 sm:w-6" />
    </button>
  );
};
