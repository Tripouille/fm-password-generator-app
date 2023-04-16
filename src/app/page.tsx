import { CharacterLengthSlider } from "@/components/CharacterLengthSlider";
import { Checkbox } from "@/components/Checkbox";
import { CopyToClipboardSVG } from "@/components/CopyToClipboardSVG";
import { RigthArrowSVG } from "@/components/RigthArrowSVG";
import { StrengthIndicator } from "@/components/StrengthIndicator";

export default function Home() {
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
        <p>PTx1f5DaFX</p>
        <CopyToClipboardSVG />
      </output>

      <form className="w-full bg-gray-dark p-4" id="generate-password">
        <CharacterLengthSlider />

        <div className="mb-8 flex flex-col gap-4 font-bold leading-tight">
          <label className="flex items-center gap-5">
            <Checkbox id="include-uppercase-letters" />
            Include Uppercase Letters
          </label>
          <label className="flex items-center gap-5">
            <Checkbox id="include-lowercase-letters" />
            Include Lowercase Letters
          </label>
          <label className="flex items-center gap-5">
            <Checkbox id="include-numbers" />
            Include Numbers
          </label>
          <label className="flex items-center gap-5">
            <Checkbox id="include-symbols" />
            Include Symbols
          </label>
        </div>

        <output
          id="strength-output"
          form="generate-password"
          htmlFor="character-length include-uppercase-letters include-lowercase-letters include-numbers include-symbols"
        >
          <StrengthIndicator strength={3} />
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
