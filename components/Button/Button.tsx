import React from "react";

export interface ButtonProps {
  ghost?: boolean;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
}
const Button: React.FC<
  React.HTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({
  children,
  disabled = false,
  block = false,
  ghost = false,
  loading = false,
  ...props
}) => {
  return (
    <div
      className={`bg-black w-fit text-black relative rounded ${props.className}`}
    >
      <button
        {...props}
        className={` transition-all translate-x-[-4px] translate-y-[-4px] hover:translate-x-[-2px] active:translate-y-[-3px] active:translate-x-[-3px] hover:translate-y-[-2px] border-primary border ${
          block ? "w-full" : ""
        } ${
          !ghost ? "bg-primary text-white" : "text-primary bg-white"
        } bottom-[1px] px-[32px] py-[22px] rounded`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
