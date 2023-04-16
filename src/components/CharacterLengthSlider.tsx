"use client";

import { useState } from "react";
import { Slider } from "./Slider";

export const CharacterLengthSlider = () => {
  const [length, setLength] = useState(10);

  return (
    <label className="flex flex-col">
      <p className="mb-2 flex items-center justify-between font-bold">
        <span className="leading-snug">Character Length</span>{" "}
        <span className="text-2xl text-green">{length}</span>
      </p>
      <Slider
        defaultValue={[length]}
        min={5}
        max={15}
        onValueChange={(value) => setLength(value[0])}
        className="mb-8"
      />
    </label>
  );
};
