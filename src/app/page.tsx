"use client";

import { useState } from "react";
import { PasswordGenerationForm } from "../components/PasswordGenerationForm";
import { PasswordOutput } from "../components/PasswordOutput";

export default function HomePage() {
  const [password, setPassword] = useState<string>("");

  return (
    <article className="flex min-w-[21.45rem] flex-col items-center sm:min-w-[33.75rem]">
      <h1 className="mb-4 w-full text-center font-bold leading-tight text-gray-base sm:mb-8 sm:text-2xl">
        Password Generator
      </h1>
      <PasswordOutput password={password} />
      <PasswordGenerationForm onSubmit={setPassword} />
    </article>
  );
}
