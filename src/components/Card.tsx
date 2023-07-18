import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="p-10 card bg-base-200">{children}</div>;
};

export default Card;
