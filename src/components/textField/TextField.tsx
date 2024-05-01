import React, { ChangeEvent, forwardRef } from "react";

interface TextFieldProps {
  initialValue?: string;
  onFocus: (e: ChangeEvent) => void;
}

const placeholder = "Write a coment";

const TextFeild = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { initialValue, onFocus } = props;

  return (
    <input
      placeholder={placeholder}
      className="rounded-xl p-4 box-border border border-border-primary w-[374px]"
      onFocus={(e) => onFocus(e)}
      value={initialValue}
      ref={ref}
    />
  );
});

export default TextFeild;
