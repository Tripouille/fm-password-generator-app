"use client";

import { CharacterLengthSlider } from "@/components/CharacterLengthSlider";
import { Checkbox } from "@/components/Checkbox";
import { CopyToClipboardSVG } from "@/components/CopyToClipboardSVG";
import { RigthArrowSVG } from "@/components/RigthArrowSVG";
import {
  StrengthIndicator,
  StrengthIndicatorProps,
} from "@/components/StrengthIndicator";
import generator from "generate-password";
import { FormEventHandler, useState } from "react";

interface PasswordGenerationOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

const MIN_CHARACTERS_LENGTH = 1;
const MAX_CHARACTERS_LENGTH = 20;

function calculatePasswordStrength(
  options: PasswordGenerationOptions
): StrengthIndicatorProps["strength"] {
  const activeBooleanOptionsCount: number = Object.values(options).reduce(
    (acc, curr) => {
      if (typeof curr === "boolean" && curr) return acc + 1;
      return acc;
    },
    0
  );
  const strength = Math.ceil(
    activeBooleanOptionsCount *
      ((options.length - MIN_CHARACTERS_LENGTH) /
        ((MIN_CHARACTERS_LENGTH + MAX_CHARACTERS_LENGTH) / 2))
  );

  if (strength < 1) return 1;
  if (strength > 4) return 4;
  return strength as StrengthIndicatorProps["strength"];
}

export default function HomePage() {
  const [password, setPassword] = useState<string>("");
  const [options, setOptions] = useState<PasswordGenerationOptions>({
    length: Math.floor((MIN_CHARACTERS_LENGTH + MAX_CHARACTERS_LENGTH) / 2),
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });
  const strength = calculatePasswordStrength(options);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setPassword(generator.generate(options));
  };

  const isOptionDisabled = (
    option: keyof Omit<PasswordGenerationOptions, "length">
  ): boolean => {
    const optionIsActive = options[option];
    const otherBooleanOptionsAreDisabled = Object.keys(options)
      .filter(
        (o) =>
          typeof options[o as keyof PasswordGenerationOptions] === "boolean" &&
          o !== option
      )
      .every((o) => !options[o as keyof PasswordGenerationOptions]);
    return optionIsActive && otherBooleanOptionsAreDisabled;
  };

  return (
    <article className="flex min-w-[21.45rem] flex-col items-center gap-4">
      <h1 className="w-full text-center font-bold leading-tight text-gray-base">
        Password Generator
      </h1>

      <output
        id="password-output"
        className="flex w-full items-center justify-between bg-gray-dark p-4 font-bold leading-loose"
        htmlFor="character-length include-uppercase-letters include-lowercase-letters include-numbers include-symbols"
      >
        <p className={`${password ? "" : "text-[#54535B]"}`}>
          {password || "P4$5W0rD!"}
        </p>
        <CopyToClipboardSVG />
      </output>

      <form
        className="w-full bg-gray-dark p-4"
        id="generate-password"
        onSubmit={handleSubmit}
      >
        <CharacterLengthSlider
          min={MIN_CHARACTERS_LENGTH}
          max={MAX_CHARACTERS_LENGTH}
          value={[options.length]}
          onValueChange={(length) =>
            setOptions((prev) => ({ ...prev, length: length[0] }))
          }
        />

        <div className="mb-8 flex flex-col gap-4 font-bold leading-tight">
          <label className="flex items-center gap-5">
            <Checkbox
              id="include-uppercase-letters"
              disabled={isOptionDisabled("uppercase")}
              checked={options.uppercase}
              onCheckedChange={(checked) =>
                setOptions((prev) => ({ ...prev, uppercase: Boolean(checked) }))
              }
            />
            Include Uppercase Letters
          </label>
          <label className="flex items-center gap-5">
            <Checkbox
              id="include-lowercase-letters"
              disabled={isOptionDisabled("lowercase")}
              checked={options.lowercase}
              onCheckedChange={(checked) =>
                setOptions((prev) => ({ ...prev, lowercase: Boolean(checked) }))
              }
            />
            Include Lowercase Letters
          </label>
          <label className="flex items-center gap-5">
            <Checkbox
              id="include-numbers"
              disabled={isOptionDisabled("numbers")}
              checked={options.numbers}
              onCheckedChange={(checked) =>
                setOptions((prev) => ({ ...prev, numbers: Boolean(checked) }))
              }
            />
            Include Numbers
          </label>
          <label className="flex items-center gap-5">
            <Checkbox
              id="include-symbols"
              disabled={isOptionDisabled("symbols")}
              checked={options.symbols}
              onCheckedChange={(checked) =>
                setOptions((prev) => ({ ...prev, symbols: Boolean(checked) }))
              }
            />
            Include Symbols
          </label>
        </div>

        <output
          id="strength-output"
          form="generate-password"
          htmlFor="character-length include-uppercase-letters include-lowercase-letters include-numbers include-symbols"
        >
          <StrengthIndicator strength={strength} />
        </output>

        <button
          className="mt-4 flex w-full items-center justify-center gap-4 border-2 border-transparent bg-green py-4 font-bold text-gray-darkest hover:border-green hover:bg-transparent hover:text-green"
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
