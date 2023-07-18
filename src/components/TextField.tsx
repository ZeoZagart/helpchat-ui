import React from 'react';

interface TextFieldProps {
  value: string;
  name: string;
  type?: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField({ value, name, type = "text", placeholder, onChange }: TextFieldProps) {
  return (
    <div className="mb-4">
      <input
        className="input input-bordered w-full"
        id={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default TextField;