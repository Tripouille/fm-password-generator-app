import { PropsWithClassName } from "@/utils/types";

export const CheckSVG = ({ className }: PropsWithClassName) => {
  return (
    <svg
      width="14"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Check mark</title>
      <path
        stroke="#18171F"
        strokeWidth="3"
        fill="none"
        d="M1 5.607 4.393 9l8-8"
      />
    </svg>
  );
};
