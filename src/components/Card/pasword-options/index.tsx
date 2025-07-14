import React from "react";

type PasswordOptionsProps = {
  posiblePasswordOptions: string[];
};

const PasswordOptions = ({ posiblePasswordOptions }: PasswordOptionsProps) => {
  
  if (!posiblePasswordOptions || posiblePasswordOptions.length === 0) {
    return null;
  }

  return (
    <div className="password-options-card">
      
      
      <h2 className="options-title">Password Suggestions</h2>

      
      <ul className="options-list">
        {posiblePasswordOptions.map((password, index) => (

          
          <li key={index} className="option-item">
            {password}
          </li>

        ))}
      </ul>
    </div>
  );
};

export default PasswordOptions;