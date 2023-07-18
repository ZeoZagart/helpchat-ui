import React from 'react';

interface TextFieldProps {
  label: string;
  name: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField({ label, name, type = "text", onChange }: TextFieldProps) {
  return (
    <div className="mb-4">
      <input
        className="input input-bordered w-full"
        id={name}
        type={type}
        placeholder={label}
        onChange={onChange}
      />
    </div>
  );
}

export default TextField;