import { CopyToClipboardSVG } from "@/components/CopyToClipboardSVG";

export default function Home() {
  return (
    <article className="flex max-w-[21.45rem] flex-col items-center border-2 border-pink-400 px-4 py-16">
      <h1 className="pb-5 pt-4 font-bold leading-tight text-gray-base">
        Password Generator
      </h1>

      <form id="generate-password">
        <output
          id="password-output"
          className="flex items-center justify-between bg-gray-dark p-4 font-bold leading-loose"
          htmlFor="character-length include-uppercase-letters include-lowercase-letters include-numbers include-symbols"
        >
          <p>PTx1f5DaFX</p>
          <CopyToClipboardSVG />
        </output>
        <div>
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
        </div>
      </form>

      <output
       id="strength-output"
        form="generate-password"
        htmlFor="character-length include-uppercase-letters include-lowercase-letters include-numbers include-symbols"
      >
        STRENGTH MEDIUM
      </output>

      <button type="submit" form="generate-password"></button>
    </article>
  );
}
