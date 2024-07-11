import React, { useState } from 'react';
import './style.scss';

const Price = ({ min = -10, max = 10 }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    let value = event.target.value;

    value = value.replace(/[^0-9-]/g, '');

    if (value === '' || value === '-') {
      setInputValue(value);
      return;
    }

    let numericValue = Number(value);

    if (numericValue < min) {
      numericValue = min;
    } else if (numericValue > max) {
      numericValue = max;
    }

    value = numericValue.toString();

    let valueText = value;
    if (value.length > 4) {
      valueText = Number(value).toLocaleString('ru-RU');
    }

    setInputValue(valueText);
  };

  const maxCharsBeforeExpand = 6;

  const getInputWidth = () => {
    if (inputValue.length <= maxCharsBeforeExpand) {
      return `${105}px`;
    } else {
      const additionalChars = inputValue.length - maxCharsBeforeExpand;
      const additionalWidth = additionalChars * 15;
      return `${105 + additionalWidth}px`;
    }
  };

  return (
    <div className='wrapper'>
      <input
        type="text"
        min={min}
        max={max}
        value={inputValue}
        onChange={handleChange}
        style={{ width: getInputWidth() }}
        placeholder=" "
        name='priceInput'
      />
      <label htmlFor="priceInput">Плейсхолдер</label>
    </div>
  );
};

export default Price;