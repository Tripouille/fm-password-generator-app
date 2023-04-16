import { StrengthIndicatorProps } from "@/components/StrengthIndicator";

export interface PasswordGenerationOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

export const MIN_PASSWORD_LENGTH = 1;
export const MAX_PASSWORD_LENGTH = 20;
export const DEFAULT_PASSWORD_GENERATION_OPTIONS: PasswordGenerationOptions = {
  length: Math.floor((MIN_PASSWORD_LENGTH + MAX_PASSWORD_LENGTH) / 2),
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: false,
};
export const PASSWORD_PLACEHOLDER = "P4$5W0rD!";

/**
 * Returns a function that checks if a boolean option is disabled.
 * Always one boolean option must be active.
 */
export const isPasswordGenerationBooleanOptionDisabled =
  (options: PasswordGenerationOptions) =>
  (booleanOption: keyof Omit<PasswordGenerationOptions, "length">): boolean => {
    const optionIsActive = options[booleanOption];
    const otherBooleanOptionsAreDisabled = Object.keys(options)
      .filter(
        (key) =>
          typeof options[key as keyof PasswordGenerationOptions] ===
            "boolean" && key !== booleanOption
      )
      .every((key) => !options[key as keyof PasswordGenerationOptions]);
    return optionIsActive && otherBooleanOptionsAreDisabled;
  };

export function calculatePasswordStrength(
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
      ((options.length - MIN_PASSWORD_LENGTH) /
        ((MIN_PASSWORD_LENGTH + MAX_PASSWORD_LENGTH) / 2))
  );

  if (strength < 1) return 1;
  if (strength > 4) return 4;
  return strength as StrengthIndicatorProps["strength"];
}
