import React from 'react';
import './Button.css';

interface ContainerProps {
  label: string;
}

const Button: React.FC<ContainerProps> = ({ label }) => {
  return (
    <div className="container">
      <button>{label}</button>
    </div>
  );
};

export default Button;
