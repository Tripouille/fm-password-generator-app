"use client";
import { CopyToClipboardButton } from "@/components/CopyToClipboardButton";
import {
  PASSWORD_GENERATION_BOOLEAN_OPION_IDS,
  PASSWORD_GENERATION_FORM_ID,
  PASSWORD_GENERATION_LENGTH_OPTION_ID,
  PASSWORD_PLACEHOLDER,
} from "@/utils/password";
import clsx from "clsx";

export function PasswordOutput({ password }: { password: string }) {
  return (
    <output
      className="mb-4 flex w-full items-center justify-between bg-gray-dark p-4 font-bold leading-loose sm:mb-6 sm:px-8 sm:py-5"
      form={PASSWORD_GENERATION_FORM_ID}
      htmlFor={`${PASSWORD_GENERATION_LENGTH_OPTION_ID} ${PASSWORD_GENERATION_BOOLEAN_OPION_IDS}`}
    >
      <p
        className={clsx("sm:text-[2rem] sm:leading-[2.625rem]", {
          "text-[#54535B]": !password,
        })}
      >
        {password || PASSWORD_PLACEHOLDER}
      </p>
      <CopyToClipboardButton text={password} />
    </output>
  );
}
