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
      className={`flex items-end gap-4 ${className ?? ""}`}
      onClick={handleClick}
    >
      <span
        className={`${
          copied ? "" : "hidden"
        } text-lg font-bold leading-snug text-green`}
      >
        COPIED
      </span>
      <CopyToClipboardSVG />
    </button>
  );
};
