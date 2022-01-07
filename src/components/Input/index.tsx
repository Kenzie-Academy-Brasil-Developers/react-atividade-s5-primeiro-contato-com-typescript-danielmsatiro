import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

const Input = ({ label, ...rest }: InputProps) => {
  return (
    <>
      {label && <div>{label}</div>}
      <input {...rest} />
    </>
  );
};

export default Input;
