"use client";
import { Checkbox } from "@/components/Checkbox";
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
  PASSWORD_GENERATION_BOOLEAN_OPION_IDS,
  PASSWORD_GENERATION_FORM_ID,
  PASSWORD_GENERATION_LENGTH_OPTION_ID,
} from "@/utils/password";
import { RecordEntries } from "@/utils/types";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import generator from "generate-password";
import { FormEventHandler, useState } from "react";

export interface PasswordGenerationFormProps {
  onSubmit: (password: string) => void;
}

export function PasswordGenerationForm({
  onSubmit,
}: PasswordGenerationFormProps) {
  const [options, setOptions] = useState(DEFAULT_PASSWORD_GENERATION_OPTIONS);
  const strength = calculatePasswordStrength(options);
  const isBooleanOptionDisabled =
    isPasswordGenerationBooleanOptionDisabled(options);
  const handleCheckedChange =
    (
      booleanOption: keyof PasswordGenerationBooleanOptions
    ): CheckboxProps["onCheckedChange"] =>
    (checked) => {
      setOptions((prev) => ({ ...prev, [booleanOption]: Boolean(checked) }));
    };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(
      generator.generate({
        ...options,
        excludeSimilarCharacters: true,
        strict: true,
      })
    );
  };

  return (
    <form
      className="sm: w-full bg-gray-dark px-4 py-4 sm:px-8 sm:pb-8 sm:pt-6"
      id={PASSWORD_GENERATION_FORM_ID}
      onSubmit={handleSubmit}
    >
      <PasswordLengthSlider
        id="password-length"
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
              aria-label={label}
            />
            {label}
          </label>
        ))}
      </div>

      <output
        form={PASSWORD_GENERATION_FORM_ID}
        htmlFor={`${PASSWORD_GENERATION_LENGTH_OPTION_ID} ${PASSWORD_GENERATION_BOOLEAN_OPION_IDS}`}
      >
        <StrengthIndicator strength={strength} />
      </output>

      <button
        className="mt-4 flex w-full items-center justify-center gap-4 border-2 border-transparent bg-green py-4 font-bold text-gray-darkest hover:border-green hover:bg-transparent hover:text-green sm:mt-8 sm:py-[1.15rem] sm:text-lg sm:leading-snug"
        type="submit"
        form={PASSWORD_GENERATION_FORM_ID}
      >
        GENERATE
        <RigthArrowSVG />
      </button>
    </form>
  );
}
