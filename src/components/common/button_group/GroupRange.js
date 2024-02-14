// ButtonGroup.js
import React from 'react';
import ButtonDateRange from '../buttons/ButtonDateRange';
function ButtonGroup({ onButtonClick }) {
  const buttons = [
    { text: "последние 5 секунд", data: [0, 0, 0, 0, 0, 5] },
    { text: "последние 5 минут", data: [0, 0, 0, 0, 5, 0] },
    { text: "последние 15 минут", data: [0, 0, 0, 0, 15, 0] },
    { text: "последние 30 минут", data: [0, 0, 0, 0, 30, 0] },
    { text: "последний 1 час", data: [0, 0, 0, 1, 0, 0] },
    { text: "последние 3 часа", data: [0, 0, 0, 3, 0, 0] },
    { text: "последние 6 часа", data: [0, 0, 0, 6, 0, 0] },
    { text: "последние 12 часов", data: [0, 0, 0, 12, 0, 0] },
    { text: "последний 1 день", data: [0, 0, 1, 0, 0, 0] }
  ];

  return (
    <div>
      {buttons.map((button, index) => (
        <ButtonDateRange
          key={index}
          text={button.text}
          data={button.data}
          onClick={() => onButtonClick(button.data)}
        />
      ))}
    </div>
  );
}

export default ButtonGroup;
