"use client";

import { DEFAULT_PASSWORD_GENERATION_OPTIONS } from "@/utils/password";
import generator from "generate-password";
import { FormEventHandler, useState } from "react";
import { PasswordOutput } from "../components/PasswordOutput";
import { PasswordGenerationForm } from "../components/PasswordGenerationForm";

export default function HomePage() {
  const [password, setPassword] = useState<string>("");
  const [options, setOptions] = useState(DEFAULT_PASSWORD_GENERATION_OPTIONS);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setPassword(generator.generate(options));
  };

  return (
    <article className="flex min-w-[21.45rem] flex-col items-center sm:min-w-[33.75rem]">
      <h1 className="mb-4 w-full text-center font-bold leading-tight text-gray-base sm:mb-8 sm:text-2xl">
        Password Generator
      </h1>

      <PasswordOutput password={password} />

      <PasswordGenerationForm
        options={options}
        setOptions={setOptions}
        handleSubmit={handleSubmit}
      />
    </article>
  );
}
