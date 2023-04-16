"use client";

import { Checkbox } from "@/components/Checkbox";
import { CopyToClipboardButton } from "@/components/CopyToClipboardButton";
import { PasswordLengthSlider } from "@/components/PasswordLengthSlider";
import { StrengthIndicator } from "@/components/StrengthIndicator";
import { RigthArrowSVG } from "@/components/svgs/RigthArrowSVG";
import {
  calculatePasswordStrength,
  DEFAULT_PASSWORD_GENERATION_OPTIONS,
  isPasswordGenerationBooleanOptionDisabled,
  MAP_PASSWORD_GENERATION_BOOLEAN_OPTION_TO_DATA,
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
  PasswordGenerationBooleanOptions,
  PASSWORD_PLACEHOLDER,
} from "@/utils/password";
import { RecordEntries } from "@/utils/types";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import generator from "generate-password";
import { FormEventHandler, useState } from "react";

export default function HomePage() {
  const [password, setPassword] = useState<string>("");
  const [options, setOptions] = useState(DEFAULT_PASSWORD_GENERATION_OPTIONS);
  const strength = calculatePasswordStrength(options);
  const isBooleanOptionDisabled =
    isPasswordGenerationBooleanOptionDisabled(options);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setPassword(generator.generate(options));
  };

  const handleCheckedChange =
    (
      booleanOption: keyof PasswordGenerationBooleanOptions
    ): CheckboxProps["onCheckedChange"] =>
    (checked) => {
      setOptions((prev) => ({ ...prev, [booleanOption]: Boolean(checked) }));
    };

  return (
    <article className="flex min-w-[21.45rem] flex-col items-center sm:min-w-[33.75rem]">
      <h1 className="mb-4 w-full text-center font-bold leading-tight text-gray-base sm:mb-8 sm:text-2xl">
        Password Generator
      </h1>

      <output
        id="password-output"
        className="mb-4 flex w-full items-center justify-between bg-gray-dark p-4 font-bold leading-loose sm:mb-6 sm:px-8 sm:py-5"
        htmlFor="character-length include-uppercase-letters include-lowercase-letters include-numbers include-symbols"
      >
        <p
          className={`sm:text-[2rem] sm:leading-[2.625rem] ${
            password ? "" : "text-[#54535B]"
          }`}
        >
          {password || PASSWORD_PLACEHOLDER}
        </p>
        <CopyToClipboardButton text={password} />
      </output>

      <form
        className="sm: w-full bg-gray-dark px-4 py-4 sm:px-8 sm:pb-8 sm:pt-6"
        id="generate-password"
        onSubmit={handleSubmit}
      >
        <PasswordLengthSlider
          className="mb-8"
          min={MIN_PASSWORD_LENGTH}
          max={MAX_PASSWORD_LENGTH}
          value={[options.length]}
          onValueChange={(length) =>
            setOptions((prev) => ({ ...prev, length: length[0] }))
          }
        />

        <div className="mb-8 flex flex-col gap-4 font-bold leading-tight sm:gap-5">
          {(
            Object.entries(
              MAP_PASSWORD_GENERATION_BOOLEAN_OPTION_TO_DATA
            ) as RecordEntries<
              typeof MAP_PASSWORD_GENERATION_BOOLEAN_OPTION_TO_DATA
            >
          ).map(([booleanOption, { id, label }]) => (
            <label
              key={id}
              className="flex items-center gap-5 sm:text-lg sm:leading-snug"
            >
              <Checkbox
                id={id}
                disabled={isBooleanOptionDisabled(booleanOption)}
                onCheckedChange={handleCheckedChange(booleanOption)}
                checked={options[booleanOption]}
              />
              {label}
            </label>
          ))}
        </div>

        <output
          id="strength-output"
          form="generate-password"
          htmlFor="character-length include-uppercase-letters include-lowercase-letters include-numbers include-symbols"
        >
          <StrengthIndicator strength={strength} />
        </output>

        <button
          className="mt-4 flex w-full items-center justify-center gap-4 border-2 border-transparent bg-green py-4 font-bold text-gray-darkest hover:border-green hover:bg-transparent hover:text-green sm:mt-8 sm:py-[1.15rem] sm:text-lg sm:leading-snug"
          type="submit"
          form="generate-password"
        >
          GENERATE
          <RigthArrowSVG />
        </button>
      </form>
    </article>
  );
}
