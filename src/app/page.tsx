export default function Home() {
  return (
    <article className="flex max-w-[21.45rem] flex-col items-center gap-2">
      <h1 className="font-bold leading-tight text-gray-base">
        Password Generator
      </h1>
      
      <form id="generate-password">
        <output htmlFor="character-length include-uppercase-letters include-lowercase-letters include-numbers include-symbols">
          <p>Generated Password</p>
          copy
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
        form="generate-password"
        htmlFor="character-length include-uppercase-letters include-lowercase-letters include-numbers include-symbols"
      >
        STRENGTH MEDIUM
      </output>

      <button type="submit" form="generate-password"></button>
    </article>
  );
}
