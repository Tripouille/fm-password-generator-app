import { CopyToClipboardSVG } from "@/components/CopyToClipboardSVG";

export default function Home() {
  return (
    <article className="flex max-w-[21.45rem] flex-col items-center gap-4 px-4 py-16">
      <h1 className=" font-bold leading-tight text-gray-base">
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

      <form className="bg-gray-dark" id="generate-password">
        <label>
          Character Length
          <input id="character-length" type="range" min="5" max="25" />
        </label>

        <label>
          <input id="include-uppercase-letters" type="checkbox" />
          Include Uppercase Letters
        </label>
        <label>
          <input id="include-lowercase-letters" type="checkbox" />
          Include Lowercase Letters
        </label>
        <label>
          <input id="include-numbers" type="checkbox" />
          Include Numbers
        </label>
        <label>
          <input id="include-symbols" type="checkbox" />
          Include Symbols
        </label>

        <output
          id="strength-output"
          form="generate-password"
          htmlFor="character-length include-uppercase-letters include-lowercase-letters include-numbers include-symbols"
        >
          STRENGTH MEDIUM
        </output>

        <button type="submit" form="generate-password"></button>
      </form>
    </article>
  );
}
