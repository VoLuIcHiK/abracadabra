import React from 'react';

const MyButton = ({ buttons }) => {
  console.log('MyButton props:', buttons);
  return (
    <div className="learning-options-container">
      {buttons.map((button, index) => (
        <button className="learning-option-button" key={index}>
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default MyButton;