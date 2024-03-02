import React from "react";

const Button = ({ type, label, className, children }) => {
  const handleClick = (event) => {
    if (type === "submit") {
      event.preventDefault();
    }
  };

  return (
    <button onClick={handleClick} type={type} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
