import React from "react";

type PasswordOptionsProps = {
  posiblePasswordOptions: string[];
};

const PasswordOptions = ({ posiblePasswordOptions } : PasswordOptionsProps) => {  
  return (
    <div>
      <h2>Posible Password Options</h2>
      <ul>
        {posiblePasswordOptions.map((password, index) => (
          <li key={index}>{password}</li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordOptions;
