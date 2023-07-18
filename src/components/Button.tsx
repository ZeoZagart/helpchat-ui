import React from 'react';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

function Button({onClick, children}: ButtonProps) {
  return (
    <button 
      className="btn btn-primary"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
